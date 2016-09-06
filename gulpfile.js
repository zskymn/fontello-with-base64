/* globals Buffer: false */

var gulp = require('gulp'),
  through = require('through2'),
  concat = require('gulp-concat'),
  base64 = require('gulp-base64'),
  sass = require('gulp-sass'),
  cssbeautify = require('gulp-cssbeautify');

var through = require('through2');

function replaceFontFace() {
  return through.obj(function (file, encoding, callback) {
    var newFontFace = [
      "@font-face {",
      "  font-family: 'fontello';",
      "  src: url('../fonts/fontello.woff') format('woff');",
      "  font-weight: normal;",
      "  font-style: normal;",
      "}",
      "",
      ""
    ].join('\n');
    file.contents = Buffer.concat([new Buffer(newFontFace), new Buffer(String(file.contents).split('\n').slice(21).join(
      '\n'))]);
    callback(null, file);
  }, function (callback) {
    callback();
  });
}

gulp.task('build', function () {
  return gulp
    .src(['../vendor/assets/stylesheets/fontello.scss', '../vendor/assets/stylesheets/animation.css'])
    .pipe(concat('fontello.css'))
    .pipe(replaceFontFace())
    .pipe(base64({
      extensions: ['woff'],
      debug: true
    }))
    .pipe(sass())
    .pipe(cssbeautify({
      indent: '  '
    }))
    .pipe(gulp.dest(''));
});
