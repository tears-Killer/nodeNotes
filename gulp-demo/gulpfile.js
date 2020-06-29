//引用gulp模块
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const fileinclude = require('gulp-file-include')
const less = require('gulp-less')
const csso = require('gulp-csso')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

//使用gulp.task建立任务
gulp.task('first', () => {
    console.log('任务执行了');
    //使用gulp.src获取要处理的文件
    gulp.src('./src/css/*.css')
        .pipe(gulp.dest('dist/css'));
})

gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        //提取公共代码
        .pipe(fileinclude())
        //压缩html文件中的代码
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
})

gulp.task('cssmin', () => {
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        // 将less语法转为css
        .pipe(less())
        //压缩less css代码
        .pipe(csso())
        .pipe(gulp.dest('dist/css'))
})

//js任务 es6代码转换 代码压缩
gulp.task('jsmin', () => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            //判断当前代码运行的环境
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

//复制文件夹
gulp.task('copy', () => {
    gulp.src('./src/img/*')
        .pipe(gulp.dest('dist/img'))
})

//构建任务
gulp.task('default', gulp.parallel('htmlmin', 'cssmin', 'jsmin', 'copy'));