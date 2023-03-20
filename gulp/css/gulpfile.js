const { series } = require('gulp')
const gulp = require('gulp')
// const sass = require('gulp-sass')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        // sass() já vai pegar todo sass e converter pra css.
        .pipe(uglifycss({ "uglifyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html')
    .pipe(concat('index.copia.html'))
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoCSS, copiarHTML)