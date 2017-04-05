const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean-css');
const del = require('del')

const scripts = require('./scripts');
const styles = require('./styles');

var devMode = false;

gulp.task('css', function(){
  gulp.src(styles)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write())
      .pipe(concat('main.css'))
      .pipe(clean())
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.reload({
          stream: true
      }));
});

gulp.task('js', function(){
  gulp.src(scripts)
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('copy', function () {
    gulp.src('src/library/**/*')
    .pipe(gulp.dest('./dist/library'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('html', function(){
  gulp.src('./src/templates/**/*.html')
      .pipe(gulp.dest('./dist/'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('rebuild', function(){
  del('dist');
});

gulp.task('destroy', function(){
  del(['dist', 'bower_components'])
})

gulp.task('build', function(){
  gulp.start(['rebuild','copy','css','js','html']);
});

gulp.task('browserSync', function() {
  browserSync.init(null, {
    open: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('start', function() {
  devMode= true;
  gulp.start(['build', 'browserSync']);
  gulp.watch(['./src/css/**/*.css'], ['css']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
  gulp.watch(['./src/templates/**/*.html'], ['html']);
});
