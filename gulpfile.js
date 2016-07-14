const gulp = require('gulp');
const runSequence = require('run-sequence');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync');
const webpack = require('webpack-stream');

gulp.task('deploy',(cb)=>{
  runSequence('webpack','sass','copy','copy-res',cb);
});

gulp.task('copy',()=>{
  return gulp.src(['page/favicon.ico','page/bundle.js','page/page.css',
  'page/index.html']).pipe(gulp.dest('deploy'));

});

gulp.task('copy-res',()=>{

  return gulp.src('page/resources/**/*')
  .pipe(gulp.dest('deploy/resources'));

});

gulp.task('dev',(cb)=>{
  runSequence(['pug','sass'],'webpack','serve',cb);
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
