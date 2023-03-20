// Função em JS é First-Class Object (Citizens)
// Higher-order function (Funções que chamam outras funções.)

// =========== Formas de Criar funções ======================================
// criar de forma literal
function fun1() {return "função 1"}

// colocar função em uma variável
const fun2 = function() {return "função 2"}

// colocar função em um array
const array = [function (a, b) {return a + b}, fun1, fun2] /*podemos add as funções que criamos lá em cima tbm, sem problemas*/
console.log(array[0](2,3)) // poderiamos trocar de índice 0 para índice 1 ou 2.
// ===========================================================================


// colocando função em um objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar()) //o falar() é pra chamar a função.




// Passar função como parametro (pra outra função)
function run(fun) {
    fun() // <--- isso aqui serve pra eu verificar se meu parâmetro é uma função ou não.
}
run(function () {
    console.log('Execuntando...') 
})



// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) { // ele retorna uma outra função que só depois mostra os valores.
        console.log(a + b + c) // mt doido isso
    }
}
soma(2, 3)(4) // ele calcula os dois valores e dp executa a função chamando um outro parâmentro: (4) para enfim terminar

// podemos fazer assim tbm ó...
const cincoMais = soma(2, 3)
cincoMais(4) // como a função soma adiciona um 3º parametro, só informei qual era.