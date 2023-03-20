const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callBack
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (notas) {return notas < 7})
console.log(notasBaixas2)

// callback com Arrow
const notasBaixas3 = notas.filter( nota => nota <7)
console.log(notasBaixas3) 