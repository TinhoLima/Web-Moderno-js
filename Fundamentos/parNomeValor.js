// par nome/valor
const saudacao = 'Opa' /* contexto léxico 1 
* local que sua variavel foi definida fisicamente no código. */

function exec() {
    const saudacao = 'Faala' // contexto léxico 2
    return saudacao
}

// Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Alisu',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua tomaladaca',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

// mas confeço que tbm não entendi muito dessa aula...