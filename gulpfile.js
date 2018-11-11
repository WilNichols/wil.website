var gulp          = require('gulp');
var responsive    = require('gulp-responsive');

var imgPath = {
  photoSrc: 'assets/photo-source/{photos,gallery}/**/*',
  photoDest: '../wilnichols.com/_site/assets/img/'
}

// for dev & prod
gulp.task('photo', function() {
  console.log('resizing photos');
  return gulp.src(imgPath.photoSrc)
    .pipe(responsive({
      '**/*.jpg': [
        {
          withMetadata: true,
          rename: { 
            suffix: '-0' 
          },
        }, {
          width: 2000,
          withMetadata: true,
          quality: 100,
          withoutEnlargement: false,
          rename: { 
            suffix: '-2000' 
          },
          withoutEnlargement: false,
        }, {
          width: 1000,
          withMetadata: true,
          quality: 80,
          withoutEnlargement: false,
          rename: { 
            suffix: '-1000' 
          },
          skipOnEnlargement: true,
        }, {
          width: 500,
          rename: { 
            suffix: '-500' 
          },
        }
      ]
    }))
    .pipe(gulp.dest(imgPath.photoDest));
});

gulp.task('default',  gulp.series('photo'));