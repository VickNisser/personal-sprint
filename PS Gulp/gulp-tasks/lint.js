
module.exports = function (gulp, plugins) {
	return function() { 
		return gulp.src(['main.js'])
		.pipe(plugins.jslint())
		.pipe(gulp.dest('main.js'));
	};
};
