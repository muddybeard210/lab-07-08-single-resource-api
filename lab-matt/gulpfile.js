'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const nodemon = require('gulp-nodemon');

const paths = ['*.js', 'lib/*.js', 'model/*.js', 'test/*.js', 'route/*.js'];

gulp.task('lint', function(){
  return gulp.src(paths)
  .pipe(eslint()).pipe(eslint.format());
});

gulp.task('test', function(){
  return gulp.src(__dirname +'/test/model-route-test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('nodemon', function(){
  nodemon({
    script: 'server.js',
    ext: 'js'
  });
});

gulp.task('default', ['lint', 'test']);
