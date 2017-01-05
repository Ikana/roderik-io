const gulp = require('gulp');
const runSequence = require('run-sequence');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync');
const webpack = require('webpack-stream');
const del = require('del');

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const svgmin = require('gulp-svgmin');

gulp.task('deploy',(cb)=>{
  runSequence('clean','webpack','pug','sass','copy','copy-res','svg','copy-o-res',cb);
});

gulp.task('svg',()=>{
  return gulp.src('page/resources/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('./deploy/resources'));
});

gulp.task('copy-o-res',()=> {
  return gulp.src(['page/resources/loading.gif'])
    .pipe(gulp.dest('deploy/resources'))
})

gulp.task('dev',(cb)=>{
  runSequence('clean',['pug','sass'],'webpack','serve',cb);
});

gulp.task('clean',(cb)=>{
  del(['deploy','page/bundle.js','page/page.css','page/index.html']).then(()=>{
    cb();
  });
})

gulp.task('copy',()=>{
  return gulp.src(['page/favicon.ico','page/bundle.js','page/page.css',
  'page/index.html']).pipe(gulp.dest('deploy'));

});

gulp.task('copy-res',(cb)=>{

  imagemin(['page/resources/*.{jpg,png}'], 'deploy/resources', {
  	plugins: [
  		imageminMozjpeg(),
  		imageminPngquant()
  	]
  }).then(files => {
    cb();
  }).catch(err =>{
    console.error(err);
  });

});


gulp.task('webpack', ()=>{

  return gulp.src('page/scripts/entry.js')
    .pipe(webpack( require('./webpack.config.js')))
    .pipe(gulp.dest('page'));

});

gulp.task('serve',()=>{

  browserSync.init({
    server: "./page"
  });

  gulp.watch("page/styles/**/*.scss", ['sass']);
  gulp.watch("page/**/*.pug", ['pug']);
  gulp.watch("page/scripts/**/*.js",['webpack']);

  gulp.watch("page/**/*.html").on('change', browserSync.reload);
  gulp.watch("page/**/*.css").on('change', browserSync.reload);
  gulp.watch("page/bundle.js").on('change', browserSync.reload);
});

gulp.task('pug',()=>{
  return gulp.src('page/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('page'));
});

gulp.task('sass',()=>{

  var outputStyle;
  if(JSON.parse(process.env.PROD_ENV || '0')){
    outputStyle = 'compressed'
  } else {
    outputStyle = 'nested';
  }

  return gulp.src('page/styles/page.scss')
  .pipe(sass({outputStyle:'compressed'}))
  .pipe(gulp.dest('page'));
});
