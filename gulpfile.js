var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
	 minifycss = require('gulp-minify-css'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    image = require('gulp-image'),
	cleanCSS = require('gulp-clean-css');
 

gulp.task('browser-sync', ['styles', 'html','image','js'], function(){
    browserSync.init({
        server: {
            baseDir: 'build'
        },
        notify: false
    });
});

gulp.task('image', function(){
    gulp.src('./app/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('build/images'))
})

gulp.task('styles', function(){
    return gulp.src('./app/css/**.css')
	
    .pipe(rename({
//        suffix: '.min',
		suffix: '',
        preffix: ''
    }))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: true
    }))
	.pipe(minifycss())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function(){
    return gulp.src('./app/*.html')
    .pipe(gulp.dest('build'))
});

// Gulp Uglify
//gulp.task('gulp-uglify', function(){
//  gulp.src('app/js/**.js')
//  .pipe(uglify())
//  .pipe(gulp.dest('build/js'))
//});

gulp.task('js', function(){
  gulp.src('app/js/**.js')
  .pipe(gulp.dest('build/js'))
});

gulp.task('build', ['styles', 'html', 'image', 'js']);


gulp.task('watch', function(){
    gulp.watch('app/style/**/*.css', ['styles']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);