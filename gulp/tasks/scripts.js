var rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream');

module.exports = function () {
	var babel = require("gulp-babel"),
		minify = require('gulp-minify'),
		concat = require('gulp-concat');

	$.gulp.task('scripts:lib', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/svgxuse/svgxuse.js', 'node_modules/object-fit-polyfill/dist/object-fit-polyfill.js', 'node_modules/babel-polyfill/dist/polyfill.js', 'node_modules/swiper/js/swiper.min.js', 'node_modules/eventemitter3/umd/eventemitter3.min.js', 'node_modules/smooth-scrollbar/dist/smooth-scrollbar.js'])
			.pipe($.gp.concat('libs.js'))
			.pipe(minify())
			.pipe($.gulp.dest('build/js/'))
			.pipe($.bs.reload({
				stream: true
			}));
	});

	$.gulp.task('scripts', function () {
		return $.gulp.src(['src/dev/js/**/*.js'])
			.pipe(
				webpackStream({
					output: {
						filename: 'main.js',
					},
					module: {
						rules: [
							{
								test: /\.js$/,
								exclude: /(node_modules|bower_components)/,
								use: {
									loader: 'babel-loader',
									options: {
										presets: ['@babel/preset-env']
									}
								}
							}
						]
					}
				})
			)
			.pipe(concat('main.js'))
			.pipe(babel())
			.pipe(minify())
			.pipe($.gulp.dest('build/js/'))
			.pipe($.bs.reload({
				stream: true
			}));
	});
}