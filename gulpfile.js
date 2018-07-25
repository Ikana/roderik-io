// @flow

const gutil = require('gulp-util')
const runSequence = require('run-sequence')
const del = require('del')
const gulp = require('gulp')
const combine = require('stream-combiner2')
const sass = require('node-sass')
const browserSync = require('browser-sync')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const merge = require('merge-stream')
const webpackstream = require('webpack-stream')
const ansiHTML = require('./build/ansiHTML')
const fs = require('fs')
const util = require('util')
const path = require('path')
const mime = require('mime-types')

const writeFile = util.promisify(fs.writeFile)

const bs = browserSync.create()

gulp.task('dev', (done) => {
  runSequence('del', 'copy', 'sass', 'serve', done)
})

gulp.task('deploy', (done) => {
  runSequence('del', 'webpack', 'copy', 'sass', done)
})

gulp.task('webpack', () => {
  const task = combine.obj([
    gulp.src('src/entry.jsx'),
    webpackstream(require('./webpack.config.prod.js'), webpack),
    gulp.dest('site')])
  return task.on('error', handleError)
})

let webPackerror = ''

function reporter (reporterOptions) {
  const { state, stats, options } = reporterOptions
  if (state) {
    var displayStats = (!options.quiet && options.stats !== false)
    if (displayStats && !(stats.hasErrors() || stats.hasWarnings()) && options.noInfo) {
      displayStats = false
    }
    if (displayStats) {
      options.log(stats.toString(options.stats))
    }
    if (!options.noInfo && !options.quiet) {
      var msg = 'Compiled successfully.'
      if (stats.hasErrors()) {
        msg = 'Failed to compile.'
      } else if (stats.hasWarnings()) {
        msg = 'Compiled with warnings.'
      }
      options.log('webpack: ' + msg)
    }
  } else {
    options.log('webpack: Compiling...')
  }

  if (stats.hasErrors()) {
    webPackerror = ansiHTML(stats.toString(options.stats))
  } else {
    webPackerror = ''
  }
}

gulp.task('serve', done => {
  const bundler = webpack(require('./webpack.config.js'))

  const webpackDevMiddlewareInstance = webpackDevMiddleware(bundler, {
    noInfo: true,
    reporter
  })
  const mdW = (req, res, next) => {
    const sendIndex = () => {
      const filename = path.join(bundler.outputPath, 'index.html')
      bundler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
          return next(err)
        }
        res.write(result)
        res.end()
      })
    }
    if (req._parsedUrl.pathname === '/') {
      sendIndex()
    } else {
      const filepath = path.join(__dirname, 'site', decodeURI(req._parsedUrl.pathname))
      if (fs.existsSync(filepath))  {
        fs.readFile(filepath, (err, result) => {
          if (err) {
            return next(err)
          }
          // res.setHeader('Content-Type', 'text/plain')
          res.setHeader('Content-Type', mime.lookup(filepath) || 'application/octet-stream')
          res.write(result)
          res.end()
        })
      } else {
        sendIndex()
      }
    }
  }
  bs.init({
    server: {
      baseDir: 'site',
      index: 'index.html',
      middleware: [webpackDevMiddlewareInstance, mdW]
    },
    port: 7000,
    ui: {
      port: 7001
    },
    open: process.env.NODE_FIRST === true,
    brower: 'Google Chrome Canary'
  })

  bs.emitter.on('init', function () {
    bs.instance.io.sockets.on('connection', (client) => {
      if (webPackerror) {
        client.emit('react-error', webPackerror)
      }
    })
  })
  webpackDevMiddlewareInstance.waitUntilValid(() => {
    gulp.watch('styles/**/*.scss', ['sass'])
    gulp.watch(['assets/**/*', 'index.html'], ['copy'])
    bundler.plugin('done', () => {
      bs.reload()
    })
    done()
  })
})

gulp.task('sass', (done) => {
  sass.render({
    file: 'styles/site.scss'
  }, function (err, result) {
    if (err) {
      gutil.log(gutil.colors.magenta(err.toString()))
      done()
    } else {
      writeFile('site/site.css', result.css, 'utf-8').then(() => {
        bs.reload()
        done()
      })
    }
  })
})

gulp.task('del', done => {
  del(['site', 'libdefs.js']).then(() => done())
})

gulp.task('copy', () => {
  const taskAssest = combine.obj([
    gulp.src('assets/**/*'),
    gulp.dest('site'),
    bs.stream()
  ])

  return merge(taskAssest).on('error', handleError)
})

function handleError (err) {
  gutil.log(gutil.colors.magenta(err.toString()))

  this.emit('end')
}
