const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');

var config = {
    mode: {
        symbol: true,
    },
    shape: {
        id: {
            generator: function(name, a, b) {
                var n = name.replace(/\s/ig, '-');
                return n.slice(0, n.indexOf('.'));
            },
        }
    }
};

gulp.task('svg', () => {
    gulp.src('./src/assets/svg/*.svg')
        .pipe(svgSprite(config))
        .pipe(rename(p => {
            p.dirname = './src/assets';
            p.basename = 'icons';
        }))
        .pipe(gulp.dest('./'));
})
