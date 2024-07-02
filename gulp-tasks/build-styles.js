'use strict';

// ---------packages
var gulp                 = require('gulp'),
    path                 = require('path'),
    fs                   = require('fs'),
    browserSync          = require("browser-sync"),
    reload               = browserSync.reload,
    plumber              = require('gulp-plumber'),
    changed              = require('gulp-changed'),
    runSequence          = require('gulp4-run-sequence'),
    sass                 = require('gulp-sass')(require('sass')),
    cssmin               = require('gulp-minify-css'),
    autoprefixer         = require('gulp-autoprefixer');

var changedInPlace = require('gulp-changed-in-place');

var onError = require("./onError");
var route = require("./route")();

var scssSourceFilesBasePath = path.join(route.main.src, 'scss')
var scssSourceFiles = path.join(fs.realpathSync(scssSourceFilesBasePath), '*.scss')

gulp.task('style:gen', function(callback) {
    var cssDestination = path.dirname(scssSourceFiles)
    console.log(scssSourceFiles)
    return gulp
        .src(scssSourceFiles)
        .pipe(plumber({
            errorHandler: onError
        }))
        //.pipe(changedInPlace())
        //.pipe(changed(route.build.styles, { extension: '.css' }))

        .pipe(changed(cssDestination, { extension: '.css' }))
        .pipe(sass().on('error', sass.logError))
        /*.pipe(autoprefixer({
            overrideBrowserslis: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())*/
        .pipe(gulp.dest(route.build.styles))
        .on('end', browserSync.reload);
});

gulp.task('style:build', function(cb) {
    console.log(cb)
    runSequence('style:gen', cb);
});
