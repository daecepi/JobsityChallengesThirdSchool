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
const babel = require('gulp-babel');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let  pump = require('pump');

gulp.task('move:html', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:es6', function() {
  gulp.src('./src/es6/**/*.js')
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


gulp.task('watch', function () {
  gulp.watch('src/*.html', gulp.parallel('move:html'))
  gulp.watch('src/scss/**/*.scss', gulp.parallel('build:sass'));
  gulp.watch('src/es6/**/*.js', gulp.parallel('build:es6'));
});