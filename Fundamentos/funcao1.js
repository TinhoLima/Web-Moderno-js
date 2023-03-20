// funcao sem retorno
console.log('Sem retorno...')
function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // assim ele já imprime o resultado
imprimirSoma(2) // nada faz (Not a Number)
imprimirSoma(2, 3, 6, 7, 5) // ele vai pegar só o A e B, o resto ele vai iguinorar
imprimirSoma() // nada faz (Not a Number)

console.log()

// Funcão com retorno
console.log('Com retorno')
function soma(a, b = 1) {
    return a + b    
}

console.log(soma(2, 3))
console.log(soma(2))
/* eu n poderia chamar a função SOMA sem o console.log(), return só chama os valores pra algum lugar
diferente do primeiro exemplo que já tinha um console.log() vindo da Function
*/
