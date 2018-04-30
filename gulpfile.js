var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
  });
   
gulp.task('default', ['serve', 'sass'],function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});