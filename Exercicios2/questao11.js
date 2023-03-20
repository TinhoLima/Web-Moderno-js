// Função que vai receber o primeiro e o ultimo elemento de um array

function primeiroUltimo(array) {
    const newArray = []
    // newArray.push(array[0])
    // newArray.push(array[array.length -1])
    // console.log(newArray)
    let ultimo = array.pop()
    let primeiro = array.shift()
    newArray.push(primeiro, ultimo)
    console.log(newArray)
}

primeiroUltimo([7, 14, "Olá"])
primeiroUltimo([-100, "Aplicativo", 16])