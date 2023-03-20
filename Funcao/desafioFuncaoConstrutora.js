/*  CONSTRUTORA -----
    transformando em uma função construtora... 
    Compare a diferença com o "classVsFactory.js"
*/
function Pessoa (nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Alison') 
p1.falar()
console.log(p1.nome)