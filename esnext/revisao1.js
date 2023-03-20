// ------------------   let e const
{
    var a = 2;// var tem 2 escopos, função e global.
    let b = 3
    console.log(b) // let tem o escopo de bloco, ou seja, só conseguimos acessa-lo dentro do bloco
}
console.log(a)

// ------------------  Template String
const produto = 'iPad'
console.log(`${produto}
é
claro`)

// ------------------  Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) // estrutura de string

const [x, , y] = [1, 2, 3]
console.log(x, y) // estrutura de array

// desestruturar os atributos de um objeto, nós usamos chaves
const { idade: i, nome } = { nome: 'Ana', idade: 9}
console.log(i, nome)