//  criar uma função que some os valores do array informado.

function somarNumeros(numero) {
    const soma = (a, b) => a + b
    console.log(numero.reduce(soma))
}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])
