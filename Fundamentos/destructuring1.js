// novo recurso do EES2015
// dentro de objetos

const pessoa = {
    nome: 'Alisu',
    idade: 5,
    endereco: {
        logradouro: 'ximbalaia',
        numero: 1000
    }
}

const {nome, idade} = pessoa // outra forma de fazer objeto
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // uma fomra de não usar nomes tão longos
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa // undefined pq não teve nada definido para a variavel
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num} } = pessoa
console.log(ag, num) // aqui não é possível chamar isso pq n existe dentro de pessoa