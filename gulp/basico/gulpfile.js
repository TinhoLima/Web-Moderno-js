//importando gulp.
const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const series = gulp.series
// outra forma de fazer...
// const { series } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2!')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB')) // "copie tudo para a pastaB"
        // .pipe() - pega todo o conteúdo do src e aplica determinada coisa ou função a nossa escolha.
        // .pipe(imagemPelaMetade())
        // .pipe(imagemEmPreto())
        // .pipe(transformacaoA())
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}

// exportando...
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)