function notaAluno (nota) {
    let notaArredondada = arredondar(nota)
    if (notaArredondada >= 40) {
        return `Aprovado com a nota ${notaArredondada}`
    } else {
        return `Reprovado com a nota ${notaArredondada}`
    }
}

// SOLUÇÃO MATEMATICA DO PROFESSOR
function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(notaAluno(38))

// MAIS UMA VEZ FALTA DE ENTENDIMENTO NA PARTE MATEMÁTICA

// Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento