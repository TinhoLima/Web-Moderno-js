function calcular(numero) {
    if (numero == 0) {
        return 1
    } else {
        return numero * calcular(numero - 1)
    }
}

console.log(calcular(5))