// Retornar somente os numeros que tiverem a quantidade de digitos especificado no segundo parametro da função.

function filtrarPorDigito(array, digitos) {
    const novoArray = []
    for (let i = 0; i < array.length; i++) {
        if ((''+array[i]).length ==  digitos) {
            novoArray.push(array[i])
        }
    }
    console.log(novoArray)

    // for(numero of array) {
    // const quantidadeDeDigitos = String(numero).length
    //     if (quantidadeDeDigitos === digitos) {
    //         resultado.push(numero)
    //     }
    //     return resultado
    // }
}

filtrarPorDigito([38, 2, 365, 10, 125, 11], 2)
filtrarPorDigito([5, 9, 1, 125, 11], 1)