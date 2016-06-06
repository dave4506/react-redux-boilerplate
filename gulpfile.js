'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserify = require("browserify");
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var babel = require('babelify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify')
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: [
        './sass',
        './bower_components/bootstrap-sass/assets/stylesheets/'
      ]
    }).on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());;
});

gulp.task('build', function () {
  browserify({
    entries: 'js/app.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babel,{presets: ['es2015','react']})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest('./public'))
  .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);

gulp.task('serve', function () {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch("./js/**/*.js", ["build"]);
  gulp.watch("index.html").on('change', browserSync.reload);
});
