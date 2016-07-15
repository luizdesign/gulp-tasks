import gulp from 'gulp';
import babel from 'gulp-babel';

module.exports = function (blob, babelConfig, distFolder) {
    return blob
        .pipe(
            babel(babelConfig)
        )
        .pipe(
            gulp.dest(distFolder)
        );
};
