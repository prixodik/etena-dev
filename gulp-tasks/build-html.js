const gulp = require('gulp');
const browserSync = require('browser-sync');
const gulpif = require('gulp-if');
const filter = require('gulp-filter');
const pugbem = require('gulp-pugbem');
const pugInheritance = require('yellfy-pug-inheritance');
const pug = require('gulp-pug');
const changed = require('gulp-changed');
var changedInPlace = require('gulp-changed-in-place');

var onError = require("./onError");
var route = require("./route")();

// Cache
let pugInheritanceCache = {};

// Root directory that contains your Pug files
const pugDirectory = route.src.pug ;

// Filter for files
function pugFilter(file, inheritance) {
  const filepath = `${pugDirectory}${file.relative}`;
  if (inheritance.checkDependency(filepath, global.changedTempalteFile)) {
    console.log(`Compiling: ${filepath}`);
    return true;
  }
  return false;
}
// Templates task
//pugbem.m = '_';
gulp.task('html:build', () => {
  return new Promise((resolve, reject) => {
    const changedFile = global.changedTempalteFile;
    const options = {
      changedFile,
      treeCache: pugInheritanceCache
    };

    // Update cache for all files or only for specified file
    pugInheritance.updateTree(pugDirectory, options).then((inheritance) => {
      // Save cache for secondary compilations
      pugInheritanceCache = inheritance.tree;

      return gulp.src(`${pugDirectory}/*.pug`)
        
        // We can use Cache only for Watch mode
        .pipe(gulpif(global.watchHtml, filter((file) => pugFilter(file, inheritance))))
        //.pipe(changed(route.main.build))
        //.pipe(changedInPlace())
        .pipe(pug({ pretty: true, plugins: [pugbem] }))
        .pipe(gulp.dest(route.main.build))
        .on('end', browserSync.reload)
        .on('end', resolve)
        .on('error', reject);
    });
  });
});

