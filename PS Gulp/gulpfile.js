var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task) {
	return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('concat', getTask('concat'));
gulp.task('sass', getTask('sass'));
gulp.task('lint', getTask('lint'));

gulp.task('default', ['lint', 'concat', 'sass'], function() {
	gulp.watch('javascript/*.js', ['lint'])
	gulp.watch('javascript/*.js', ['concat']);
	gulp.watch('sass/**/*.scss', ['sass']);
});