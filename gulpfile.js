const gulp = require('gulp'),
    gulpSass = require('gulp-sass')

gulp.task('styles', function () {
    gulp.src('scss/**/*.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('css'))
})