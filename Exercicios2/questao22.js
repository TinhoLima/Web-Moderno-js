// Sortear um número de 1 a 5

function funcaoDaSort(numero) {
    let aleatorio = Math.floor(Math.random() * 5 + 1) // --- usamos o sinal de multiplicaçao, depois definimos o teto maximo somando mais o teto minimo

    if (numero == aleatorio) {
        console.log(`Parabéns! O número sorteado foi o ${aleatorio}`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${aleatorio}`)
    }
}



funcaoDaSort(10)
funcaoDaSort(5)
funcaoDaSort(5)