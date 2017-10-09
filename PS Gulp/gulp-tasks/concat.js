
module.exports = function(gulp, plugins) {
	return function() {
		return gulp.src('javascript/*.js')
			.pipe(plugins.concat('main.js'))
			.pipe(gulp.dest('javascript/dist'));
	};
};
