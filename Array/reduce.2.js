const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?

// ----------------------------------------------------------------------------------> O MEU (não funcionou)
// const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(atual) {
//     if (atual == true) {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(todosBolsistas)

// ------------------------------------------------------------------------------------------> O DELE (modificado como minha versão)
// const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
//     if (acumulador && atual == true) {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(todosBolsistas)

// --------------------------------------------------------------------------------------------> O DELE mesmo
const todosBolsistas = (acumulado, atual) => acumulado && atual
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// Desafio 2: Algum aluno é bolsista?

// ------------------> MINHA VERSAO
const bolsista = alunos.map(a => a.bolsista).reduce(function(acumulado,atual) {
    if (atual == true) {
        acumulado = atual
    }
    return acumulado
})
console.log(bolsista)

// ---------------> versão dele
// const algumBolsista = (acumulado, atual) => acumulado || atual
// console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))