var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var connect = require('gulp-connect');

function getTask(task) {
	return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('concat', getTask('concat'));
gulp.task('sass', getTask('sass'));
gulp.task('lint', getTask('lint'));
gulp.task('babel', ['concat'],getTask('babel'));
gulp.task('connect', function() {
	connect.server();
  });

gulp.task('default', ['lint', 'concat', 'sass','babel','connect'], function() {
	gulp.watch('javascript/*.js', ['lint']);
	gulp.watch('javascript/*.js', ['concat']);
	gulp.watch('javascript/main.js', ['babel']);
	gulp.watch('sass/**/*.scss', ['sass']);
});
