/**
 * Dependencies.
 */
var browserify = require('browserify');
var vinyl_source_stream = require('vinyl-source-stream');
var vinyl_buffer = require('vinyl-buffer');
var gulp = require('gulp');
var rename = require('gulp-rename');
var path = require('path');

var PKG = require('./package.json');

gulp.task('browserify', function()
{
	return browserify([path.join(__dirname, PKG.main)],
	{
		standalone: PKG.name
	})
		.bundle()
		.pipe(vinyl_source_stream(PKG.name + '.js'))
		.pipe(vinyl_buffer())
		.pipe(rename(PKG.name + '.js'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series('browserify'));
