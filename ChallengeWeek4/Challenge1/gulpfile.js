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
let gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  pump = require('pump');
gulp.task('default', function() {
  console.log('Hello Gulp!');
});


gulp.task('build:js', function(callback) {
  pump([
    gulp.src('src/**/*.js'),
    uglify(),
    gulp.dest('dist')
  ], callback);
});

gulp.task('build:sass', function (callback) {
  return gulp.src("./sass/**/*.scss")
  .pipe(sass().on("error", (e) => {console.log(e);}))
  .pipe(gulp.dest('./css'));
});

gulp.task('watch:sass', function (callback) {
  gulp.watch("./sass/**/*.scss", ['sass']);
})