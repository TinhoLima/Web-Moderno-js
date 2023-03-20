// Multiplicar os parametros sem usar a operação de multiplicação.

function multiplicar(inteiro1, inteiro2) {
    let x = 0
    for (let i = 0; i < inteiro1; i++) {
        x += inteiro2
    }
    console.log(x)
}

multiplicar(5, 5)
multiplicar(2, 8)
multiplicar(0, 7)
