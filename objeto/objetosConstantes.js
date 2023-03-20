// Por que consiguimos modificar uma variavel const se ela é contante?
// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
//  note que mudamos apénas os parâmetros da constante

console.log(pessoa.nome)

Object.freeze(pessoa) //Por mais que a gente tente alterar, o freeze congela nosso objeto para que não ocorra mais modificações.

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})// Podemos criar uma variavel constante já configurada para não ter mudanças.
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)