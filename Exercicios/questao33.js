vetorInteiro = [2,4,8,5]
vetorString = ['Niko','Alison','Vick','Ayla']
vetorDouble = [2.25,5.70,8.20,3.75]



function concatenar(a,b){
    let resultado = []
    resultado = resultado.concat(a,b)
    return resultado
}

console.log(concatenar(vetorString, vetorInteiro))
console.log(concatenar(vetorInteiro,vetorDouble))

// SOLUÇÃO DO PROFESSOR. (INTERESSANTE)

// function concatenar (...args) {
//     resultado = []
//     for(let i = 0; i<arguments.length; i++){
//         resultado = resultado.concat(arguments[i])
//     }
//     return resultado;
// }