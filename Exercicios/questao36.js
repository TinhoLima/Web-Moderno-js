function vetorUm(vetor ,num) {
    let vetorInterno = []
    for (const i in vetor) {
        vetorInterno.push(vetor[i] * num)
    }
    console.log(vetorInterno)
}

function vetorDois(vetor, num) {
    let vetorInterno = []
    for (const i in vetor) {
        if (vetor[i] > 5) {
            vetorInterno.push(vetor[i] * num)
        }
    }
    console.log(vetorInterno)
}

vetor = [ 7, 8, 9, 2, 4, 12, 16, 3, 18, 19, 20, 21, 4, 5, 6]

vetorUm(vetor, 2)
vetorDois(vetor, 2)

// SOLUÇÃO DO PROFESSOR

// let vetor = [1, 2, 3, 4, 5]

// function multiplicaVetor(vetor, multiplicador){
//     let vetorResultado = []
//     vetor.forEach(elemento => {
//         vetorResultado.push(elemento * multiplicador) 
//     });

//     return vetorResultado
// }

// console.log(multiplicaVetor(vetor, 3))
