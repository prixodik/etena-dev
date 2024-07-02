'use strict';
// ---------packages
var gulp                 = require('gulp'),
    del                  = require('del'),
    requireDir           = require('require-dir');

const changed = require('gulp-changed');

// ---------paths
var route = require("./gulp-tasks/route")();

// --------- tasks
requireDir('./gulp-tasks/');
console.log('requireDir')
console.log(requireDir('./gulp-tasks/'))
// ---------build tasks

gulp.task('build',  gulp.series(
  'html:build',
  'style:build',
  'js:build',
  'fonts:build',
  'images:build',
  'spriteSvg:build'
));

gulp.task('setWatch', (done) => {
  global.isWatching = true;
  done();
});

gulp.task('clean', () => {
  return del([route.main.build]);
});

gulp.task('dataFromWebSite', () => {
  //return gulp.src('src/dataFromWebSite/**/*.*')
      //.pipe(gulp.dest('build/dataFromWebSite/') );
      //.pipe(gulp.dest('build/') );
});

// ---------watch tasks
gulp.task('watch', function() {
    //gulp.watch('src/dataFromWebSite/**/*.*', gulp.series('dataFromWebSite'));

    global.watchHtml = true;
    gulp.watch(route.src.pugFiles, gulp.series('html:build'))
      .on('all', (event, filepath) => {
        global.changedTempalteFile = filepath.replace(/\\/g, '/');
      });
    gulp.watch(route.watch.styles, gulp.series('style:build'));
    gulp.watch(route.watch.js, gulp.series('js:build'));
    gulp.watch(route.watch.images, gulp.series('images:build'));
    gulp.watch(route.watch.fonts, gulp.series('fonts:build'));
    gulp.watch(route.watch.spriteSvg, gulp.series('spriteSvg:build'));
    gulp.watch(route.watch.spriteSvg, gulp.series('spriteSvg:build'));
  return;
});

gulp.task('default', gulp.series('clean', 'build', 'webserver', 'setWatch', 'watch'));
