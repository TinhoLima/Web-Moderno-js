/* arguments - 
    O objeto argumentos não é um Array. É similar a um Array, 
    mas não possui as propriedades de Array, exceto length.
*/
function soma () {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 8, 18.1))
console.log(soma(1.1, 2, ' teste')) // ele somou e concatenou
// console.log(soma(1.1, 2.2, ' teste')) isso aqui gerou um ponto flutuante que ele esplicou no capitulo de fundamentos
console.log(soma('a','b','c'))
// independente de ter muitos números ou não :)


/*ARGUMENTS -- 
    é um array interno disponivel, quando nenhum parâmentro é passado
    esse array fica vazio e pode pegar todos os parâmetros e usar na sua função.
*/
