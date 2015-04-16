'use strict';

module.exports = {
  through: require('through2'),
  plumber: require('gulp-plumber'),
  sourcemaps: require('gulp-sourcemaps'),
  uglify: require('gulp-uglify'),
  rename: require('gulp-rename'),
  minifyHtml: require('gulp-minify-html'),
  csso: require('gulp-csso'),
  karma: require('../plugins/karma'),
  protractor: require('gulp-protractor'),
  inject: require('gulp-inject'),
  imagemin: require('gulp-imagemin'),
  ngAnnotate: require('gulp-ng-annotate'),
  jshint: require('gulp-jshint'),
  sass: require('gulp-sass'),
  tsc: require('gulp-tsc'),
  coffee: require('gulp-coffee'),
  babel: require('gulp-babel'),
  filter: require('gulp-filter'),
  rev: require('gulp-rev'),
  revReplace: require('gulp-rev-replace'),
  webFontScss: require('../plugins/gulp-web-font-scss'),
  uglifySaveLicense: require('uglify-save-license'),
  runSequence: require('run-sequence'),
  mainBowerFiles: require('main-bower-files'),
  sort: require('sort-stream'),
  useref: require('gulp-useref'),
  wiredep: require('wiredep').stream,
  merge: require('merge2'),
  angularFileSort: require('gulp-angular-filesort'),
  debug: require('gulp-debug'),
  wait: require('gulp-wait'),
  ngHtml2js: require('gulp-ng-html2js'),
  concat: require('gulp-concat'),
  replace: require('gulp-replace'),
  size: require('gulp-size'),
  manifest: require('gulp-manifest'),
  notify: require('gulp-notify')()
};
