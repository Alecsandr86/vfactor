var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var browserSync = require("browser-sync");
var reload = browserSync.reload;




gulp.task('less', function () {
    return gulp.src('./css/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./css'))
        //.pipe(reload({stream: true}));
});

var config = {
    server: {
        baseDir: ""
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "FrontenD"
};

gulp.task('webserver', function () {
    browserSync(config);
});


gulp.task('watch', function(){

    watch(['css/*.less'], function(event, cb) {
        gulp.start('less');
    });
});

gulp.task('build', [
    'less'

]);

gulp.task('default', ['build', 'webserver', 'watch']);