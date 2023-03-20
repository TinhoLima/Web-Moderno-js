function mediaAritmetica() {
    let soma = 0
    for (const i in vetor) {    
        soma  += vetor[i]
    }  
    console.log (soma / vetor.length)
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21, 4, 5, 6]

mediaAritmetica()