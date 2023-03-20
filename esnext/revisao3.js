// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // Imprimi um array com o valor dos atributos do objeto
console.log(Object.entries(obj)) // Imprimi um array com os atributos e objetos 1 em cada grupo

// Melhorias na Notação Liretal
const nome = 'Alison'
const pessoa = {
    nome,
    ola() {
        return 'Tudo bom?'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {return 'Au au!'}
}

dog1 = new Cachorro()
console.log(dog1.falar())