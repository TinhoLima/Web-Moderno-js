// Retornar todos os números pares que tbm tenham índices pares de um array 

function retornaPar(array) {
    const newArray = []
    for (const i in array) {
        if ((array[i] % 2 == 0) && (i % 2 == 0)) {
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}

retornaPar([1, 2, 3, 4])
retornaPar([10, 70, 22, 43])