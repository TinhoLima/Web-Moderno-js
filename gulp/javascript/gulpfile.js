// --------- Todo esse conjunto parece ser padrão ----------
    const { series } = require('gulp')
    const gulp = require('gulp')
    const concat = require('gulp-concat')
    const uglify = require('gulp-uglify')
    const babel = require('gulp-babel')
// ---------------------------------------------------------

function transformacaoJS(cb) {
    gulp.src('src/**/*.js')
        // Primeiro criar um objeto de conf. para configurar o babel...
        .pipe(babel({
            comments: false, // tirar os comentários...
            presets: ["env"], // usar o presets mais moderno que existe..

        }))
        .pipe(uglify()) // não precisa de parametro. Vai pegar todo o cod pra ser minificado. 
        .on('error, executado apenas o uglify.', err => console.log(err))
        .pipe(concat('codigo.min.js')) // contatenando
        .pipe(gulp.dest('build')) // criando pasta de destino.

    return cb()
}

function fim(cb) {
    console.log('Fim!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)