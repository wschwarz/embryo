var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var path = require('path');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var less = require('gulp-less');
var rimraf = require('rimraf');
var mocha = require('gulp-spawn-mocha');

var paths = {
	js: ['assets/js/**/**/**/*.js', 'assets/js/**/**/**/*.jsx'],
	less: ['assets/less/**/**/**/*.less'],
	bootstrap: ['node_modules/bootstrap/less/bootstrap.less'],	
	livereload: ['./public/**/*', './views/**/*'],
	dist: function (p) {
		return path.join('./public/assets', p);
	}
};

gulp.task('test', function(cb) {
	gulp.src([ './test/**/*.js', 
		'./test/*.js' ])
		.pipe(mocha({
            harmony: true,
            ignoreLeaks: false,
            reporter: 'spec',
            env: {'NODE_ENV': 'development'}
        }));
});

gulp.task('clean', function(cb) {
	rimraf('./public/assets', cb);
});

gulp.task('js', function () {
	return gulp.src(paths.js)
		.pipe(gulpWebpack(webpackConfig, webpack))
		.pipe(gulp.dest(paths.dist('js')))
		.pipe(livereload());
});

gulp.task('react', function () {
	return gulp.src(require.resolve('react/dist/react.min'))
		.pipe(gulp.dest(paths.dist('js')));
});

gulp.task('less', function () {
	gulp.src(paths.less)
		.pipe(less())
		.pipe(gulp.dest(paths.dist('css')))
		.pipe(livereload());
});

gulp.task('bootstrap', function () {
	gulp.src(paths.bootstrap)
		.pipe(less())
		.pipe(gulp.dest(paths.dist('bootstrap')));
});

gulp.task('server', ['build'], function() {
	// place code for your default task here
	nodemon({ script: 'index.js', 
		ext: 'html js',
		ignore: [
			'node_modules/**/*',
			'bower_components/**/*',
			'webpack.config.js',
			'gulpfile.js',
			'assets/**/*'
	    ],
	    nodeArgs: ['--harmony']
	})
	.on('restart', function() {
		console.log('restarted');
	});
});

gulp.task('build', function(cb) {
	runSequence('clean', ['js', 'less', 'bootstrap', 'react'], cb);
});

gulp.task('dev', ['build', 'watch', 'server'], function() {});

gulp.task('watch', function () {
	livereload.listen({ basePath: paths.dist('') });
	gulp.watch(paths.livereload, ['build']);
	gulp.watch(paths.js, ['js']);
	gulp.watch(paths.less, ['less']);
	// gulp.watch(paths.img, ['img']);
});