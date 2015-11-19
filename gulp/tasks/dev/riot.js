var gulp   = require('gulp');
var config = require('../../config.js').tags;
var riot   = require('gulp-riot');

gulp.task('riot', ()=> {
  gulp.src(config.src)
      .pipe(riot())
      .pipe(gulp.dest(config.dest))
});