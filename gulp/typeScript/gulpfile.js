const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src() // não preciso informar qual src porque no arquivo "tsconfig.json" já diz qual deve ser puxado.
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
        
}

exports.default = series(transformacaoTS)
