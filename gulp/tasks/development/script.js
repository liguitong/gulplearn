/**
 * Created by liguitong on 10/13/16.
 */

var gulp = require('gulp');
var browsersync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var bundleLogger = require('../../util/bundleLogger');
var handleErros = require('../../util/handleErros');
var config = require('../../config').browserify;