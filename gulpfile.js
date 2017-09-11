const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

gulp.task('sass', () => {
    gulp.src('src/scss/*.scss')
        .pipe(plumber())    
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());
});

gulp.task('js', () => {
	gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'));
});

gulp.task('js-watch', ['js'], (done) => {
	browserSync.reload();
	done();
});

gulp.task('html', () => {
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('html-watch', ['html'], (done) => {
	browserSync.reload();
	done();
});

gulp.task('webserver', () => {
	browserSync.init({
		server: {
			baseDir: './dist',
		},
	});
	gulp.watch('src/*.html', ['html-watch']);
	gulp.watch('src/js/*.js', ['js-watch']);
	gulp.watch('src/scss/*.scss', ['sass']);
});


gulp.task('serve', ['sass', 'js', 'html', 'webserver']);
