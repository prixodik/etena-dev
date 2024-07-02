'use strict';

// ---------packages
var gulp               = require('gulp'),
  strip                = require('gulp-strip-comments'),
  uglify               = require('gulp-uglify'),
  browserSync          = require("browser-sync"),
  //watch = require('gulp-watch'),
  changed              = require('gulp-changed'),
  changedInPlace = require('gulp-changed-in-place'),
  include              = require("gulp-include");

//const changed = require('gulp-changed');

var onError = require("./onError");
var route = require("./route")();

gulp.task('js:build', function(){
   return gulp.src(route.src.js +'*.js')

      //.pipe(changed(route.build.js, { extension: '.js' }))
      //.pipe(changedInPlace())
      .pipe(include({
        extensions: "js",
        includePaths: [
            route.src.js
        ]
      }))

      //.pipe(strip())
      //.pipe(uglify())
      .pipe(gulp.dest(route.build.js))
      .on('end', browserSync.reload);
});
