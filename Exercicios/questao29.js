function verificador() {
    let numeros = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >=10 && vetor[i] <=20) {
            numeros.push(vetor[i])
        }
    }
    console.log(`${numeros.length} números estão dentro do intervalo.`)
    console.log(`Os números dentro do intervalo são: ${numeros}`)
}

const vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

verificador()