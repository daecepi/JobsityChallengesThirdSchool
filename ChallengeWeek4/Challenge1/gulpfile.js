// var gulp = require("gulp");
// var babel = require("gulp-babel");

// var connect = require("gulp-connect");
// var browserify = require("browserify");
// var babelify = require("babelify");
// var source = require("vinyl-source-stream");


// gulp.task("default", function () {
//   return gulp.src("./main/main.js")
//     .pipe(babel())
//     .pipe(gulp.dest("dist"));
// });
let gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
let sass = require('gulp-sass');
const concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let  pump = require('pump');


gulp.task('move:html', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:es62', () =>
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
);

gulp.task('build:es6', function() {
  return gulp.src('./src/es6/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build:sass', function () {
  return gulp.src("./src/scss/**/*.scss")
  .pipe(sass().on("error", (e) => {console.log(e);}))
  .pipe(gulp.dest('dist/css'));
});


gulp.task('build:sass2', function () {
  return gulp.src('./sass/**/*.scss')
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./css'));
 });

gulp.task('move:images', function () {
  return gulp.src('./images/**/*.*')
          .pipe(gulp.dest('./dist/images'));
});

gulp.task('move:fonts', function () {
return gulp.src('./fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.html', gulp.parallel('move:html'))
  gulp.watch('src/scss/**/*.scss', gulp.parallel('build:sass'));
  gulp.watch('src/es6/**/*.js', gulp.parallel('build:es62'));
  gulp.watch('src/images/**/*.*', gulp.parallel('move:images'));
  gulp.watch('src/fonts/**/*.*', gulp.parallel('move:fonts'));
});