'use strict';
// init
var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  svgSprite = require('gulp-svg-sprite'),
  svgmin = require('gulp-svgmin'),
  cheerio = require('gulp-cheerio'),
  replace = require('gulp-replace');

var route = require("./route")();

gulp.task('spriteSvg:build', () => {
  return gulp.src(route.src.spriteSvg)
        .pipe(svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe(cheerio({
          run: function ($) {
            //$('[fill]').removeAttr('fill');
            //$('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
          },
          parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
          mode: {
            symbol: {
              sprite: "../" + route.build.spriteSvg + "sprite-svg.svg",
              render: {
                scss: {
                  "dest": "../" +route.src.spriteSvgStyle + 'sprite-svg.scss',
                  "template": route.src.spriteSvgTemplate
                }
              },
              example: true
            }
          }
        }))
        .pipe(gulp.dest("./"));

});
