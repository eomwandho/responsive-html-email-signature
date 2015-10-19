'use strict';

var gulp = require('gulp');

function watchTask(options){
  gulp.task('watch', function(){
    gulp.watch([options.src + '/**/*.html', options.src + '/**/*.css'], ['build']);
  });
};

module.exports = watchTask