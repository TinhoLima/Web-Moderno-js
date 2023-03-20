function verificador() {
    let maior 
    let menor 
    for (const i in vetor) {
        // SOLUÇÃO ADAPTADA COM O PROFESSOR
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor [i]
        }
        // ------------
        if (vetor[i] > maior) {
            maior = vetor[i]
        } else if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    return [maior, menor]
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21, 4, 5, 6]

console.log(verificador())