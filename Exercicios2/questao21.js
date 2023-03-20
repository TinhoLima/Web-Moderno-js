// Receba um array e informe o menor número do array.

function menorNumero(array) {
    const verificador = array.reduce(function(acumulador, atual) {
        let menor = acumulador > atual ? atual : acumulador
        return menor
    })

    console.log(verificador)
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])