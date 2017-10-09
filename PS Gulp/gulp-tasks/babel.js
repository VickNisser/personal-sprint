
module.exports = function(gulp, plugins) {
	return function() {
		return gulp.src('javascript/dist/main.js')
			.pipe(plugins.rename({suffix: '.min'}))
			.pipe(plugins.babel({minified:true}))
			.pipe(gulp.dest('javascript/dist'));
	};
};
