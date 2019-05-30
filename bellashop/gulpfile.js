var gulp = require('gulp');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var gulpsync = require('gulp-sync')(gulp);
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('less', function() {
   return gulp.src('./public/styles/less/style.less').pipe(less({
           plugins: [autoprefix]
       }))
       .pipe(gulp.dest('./public/styles/less'));
});

gulp.task('watch', gulpsync.sync([
    'less'
]), function () {
        gulp.watch(['./public/styles/less/*.less'], ['less']);
});

gulp.task('default', ['watch']);
