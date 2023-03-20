const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // mostrando os nomes dos atributos do objeto.

console.log(Object.values(pessoa)) // mostrando o conteúdo dos atributos.

console.log(Object.entries(pessoa)) // mostra em formatos de arryas, cada conteúdo.

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


// Daqui pra baixo não entendi nada...
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    witable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

// não ficou claro...
