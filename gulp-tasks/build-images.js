// ---------packages
var gulp = require('gulp'),
	clone = require('gulp-clone'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	//changed = require('gulp-changed'),
	changedInPlace = require('gulp-changed-in-place'),
	webp = require('gulp-webp');

//const changed = require('gulp-changed');

var onError = require("./onError");
var route = require("./route")();

gulp.task('images:build', done => {
	var sink = clone.sink();
	return gulp.src(route.src.imagesFiles)
		//.pipe(changed(route.build.images))
		//.pipe(changedInPlace())
		.pipe(cache(
			imagemin([
				imagemin.gifsicle({interlaced: true}),
				imagemin.optipng({optimizationLevel: 5}),
				imagemin.svgo({
					plugins: [
						{
							removeViewBox: false,
							collapseGroups: true
						}
					]
				})
			])
		))
		.pipe(sink)
		.pipe(gulp.dest(route.build.images)) // Сначала сохраняем оригинальные изображения
		.pipe(webp()) // Затем преобразуем в WebP
		.pipe(gulp.dest(route.build.images)); // Сохраняем WebP изображения в ту же директорию
});
