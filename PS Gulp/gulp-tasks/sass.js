
module.exports = function(gulp, plugins) {
	return function () {
		return gulp.src('sass/main.scss')
			.pipe(plugins.sass())
			.pipe(plugins.minify())
			.pipe(plugins.rename({suffix: '.min'}))
			.pipe(gulp.dest('css'));
	};	
};
