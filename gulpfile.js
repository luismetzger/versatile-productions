var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect');

gulp.task('sass', function () {
    gulp.src('assets/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets/css'))
        .pipe(connect.reload())
});

gulp.task('build', function () {
    gulp.src('assets/sass/app.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions', "IE 9"],
			cascade: false
		}))
        .pipe(csso())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        port: 8000,
        livereload: true
    });
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('assets/images/sprites/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('assets/css/'));
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/*.scss', ['sass']);
    gulp.watch('index.html', ['html']);
});


gulp.task('default', ['connect', 'watch', 'html']);
