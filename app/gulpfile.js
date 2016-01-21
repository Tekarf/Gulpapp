var gulp=require("gulp");
var copy = require('gulp-contrib-copy');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
 
gulp.task('clean', function () {
  return gulp.src('build/', {read: false})
    .pipe(clean());
});

 gulp.task('copy', function() {
 gulp.src(["*.html", "style.css"])
  .pipe(copy())
     .pipe(gulp.dest('build/'));
});

 gulp.task('copy1', function() {
 gulp.src("bower_components/bootstrap/dist/css/bootstrap.min.css")
  .pipe(copy())
     .pipe(gulp.dest('build/libs'));
});

 gulp.task('concatb', function() {
  gulp.src(["bower_components/jquery/dist/jquery.min.js",
          "bower_components/bootstrap/dist/js/bootstrap.min.js",
          "bower_components/angular/angular.min.js",
          "bower_components/angular-ui-router/release/angular-ui-router.min.js",
          "src/app.js"])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('build/'));
});
gulp.task('styles', function() {
  gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css'
    // ,'bower_components/components-font-awesome/css/font-awesome.min.css'
    ])
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('build/styles/'));
});


 gulp.task('connect', function() {
   connect.server();
});

 // minify new images
gulp.task('imagemin', function() {
  var imgSrc = 'src/images/**/*',
      imgDst = 'build/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

gulp.task('default', ['connect','copy','copy1','styles','imagemin', 'concatb'],function() {
  // watch for HTML changes
  gulp.watch(['*.html','style.css'], function() {
    gulp.run('copy');
  });

  gulp.watch('src/app.js', function() {
    gulp.run('concatb');
  });
  
});