const resultado = nota =>  nota >= 7 ? 'Aprovado' : 'Reprovado'
// olha que legal o [?] fez meio que um if simplezao
// uma expressão true or false

/* === assim tbm funcionaria
const resultado = nota => {} 
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/
console.log(resultado(8.5))
console.log(resultado(6.7))