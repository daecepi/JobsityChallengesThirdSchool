
let gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
let sass = require('gulp-sass');
const concat = require('gulp-concat');


/**
 * Default task to compile the project initially
 */
gulp.task('default', ()=>{
  gulp.start('move:html');
  gulp.start('build:es6');
  gulp.start('build:scss');
  gulp.start('move:images');
  gulp.start('move:fonts');
  gulp.start('move:cssExternals');
  gulp.start('move:jsExternals');
});

/**
  * Function that moves all html files added to the projects root folder
  */
gulp.task('move:html', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

/*
* Build es6 with sourcemaps
*/
gulp.task('build:es62', () =>
    gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
);

/*
* Build es6 without sourcemaps
*/
gulp.task('build:es6', function() {
  return gulp.src('./src/es6/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'));
});

/*
* Build sass without sourcemaps
*/
gulp.task('build:sass', function () {
  return gulp.src("./src/scss/**/*.scss")
  .pipe(sass().on("error", (e) => {console.log(e);}))
  .pipe(gulp.dest('dist/css'));
});

/*
* Build sass with sourcemaps
*/
gulp.task('build:sass2', function () {
  return gulp.src('./src/sass/**/*.scss')
   .pipe(sourcemaps.init())
   .pipe(sass().on('error', sass.logError))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('./dist/css'));
 });

 /**
  * Function that moves all images added to the projects 'images' folder
  */
gulp.task('move:images', function () {
  return gulp.src('./images/**/*.*')
          .pipe(gulp.dest('./dist/images'));
});

/**
 * Function that moves all fonts added to the projects 'fonts' folder
 */
gulp.task('move:fonts', function () {
return gulp.src('./fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'));
});

/**
 * Function to move already compiled or javascript native libraries, in this projects bootstrap.min.css
 */
gulp.task('move:jsExternals', function () {
  return gulp.src('./js/**/*.*')
        .pipe(gulp.dest('./dist/js'));
});

/**
 * Function to move already compiled or css written libraries, in this projects bootstrap.min.js
 */
gulp.task('move:cssExternals', function () {
  return gulp.src('./css/**/*.*')
        .pipe(gulp.dest('./dist/css'));
});


/**
 * General funtion to watch changes in the project structure
 */
gulp.task('watch', function () {
  gulp.watch('src/*.html', gulp.parallel('move:html'))
  gulp.watch('src/scss/**/*.scss', gulp.parallel('build:sass'));
  gulp.watch('src/es6/**/*.js', gulp.parallel('build:es62'));
  gulp.watch('src/images/**/*.*', gulp.parallel('move:images'));
  gulp.watch('src/fonts/**/*.*', gulp.parallel('move:fonts'));
  gulp.watch('src/css/**/*.*', gulp.parallel('move:cssExternals'));
  gulp.watch('src/js/**/*.*', gulp.parallel('move:jsExternals'));
});