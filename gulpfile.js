var gulp          = require('gulp');
var responsive    = require('gulp-responsive');
var changed       = require('gulp-changed');

var imgPath = {
  photoSrc: 'photo-source/{gallery,gallery-previews,photos}/**/*',
  photoDest: '../wilnichols.com/_source/assets/img/',
  compareDest: '../wilnichols.com/_source/assets/img/{gallery,gallery-previews,photos}/**/*'
}

// for local tests
gulp.task('photo', function() {
  console.log('resizing photos');
  return gulp.src(imgPath.photoSrc)
    .pipe(changed(imgPath.compareDest))
    .pipe(responsive({
      '**/*.jpg': [
        {
          width: 500,
        }
      ]
    }))
    .pipe(gulp.dest(imgPath.photoDest));
});

gulp.task('default',  gulp.series('photo'));