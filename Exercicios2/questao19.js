// Ler um array e independente de seu tamanho, mostrar a média dos valores

function calcularMedia(vetor) {
    let soma = 0
    for (const key in vetor) {
        soma += vetor[key]
    }
    console.log(soma / vetor.length)
}

calcularMedia([0, 10])
calcularMedia([1, 2, 3, 4, 5])