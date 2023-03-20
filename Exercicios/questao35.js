vetorPilha = [1,2,3,4,5]
vetorAdiciona = [6,7,8,9,10]

function concatenar(a, b) {
    let resultado = []
    resultado = resultado.concat(a, b)
    console.log(`Vetor resultado: ${resultado}`)
}

concatenar(vetorPilha,vetorAdiciona)