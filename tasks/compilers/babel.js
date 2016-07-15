import gulp from 'gulp';
import babel from 'gulp-babel';

export default function babelCompiler (blob, babelConfig, distFolder) {
    return blob
        .pipe(
            babel(babelConfig)
        )
        .pipe(
            gulp.dest(distFolder)
        );
};
