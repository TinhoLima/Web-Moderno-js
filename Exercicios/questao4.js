function divisor (x, y) {
    let conta = x / y
    let resta = conta % 2
    return console.log(`Resultado ${conta} \nResta: ${resta}`)
}

divisor(8, 2)