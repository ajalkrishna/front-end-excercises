const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))

const sourceUrl = './src/styles.scss';
const destinationUrl = './dist/';

gulp.task('style', () => {
    gulp.src(sourceUrl)
        .pipe(sass({
            // outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(destinationUrl))
})



