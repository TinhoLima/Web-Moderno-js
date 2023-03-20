class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Alison') // Crio um objeto informando a Classe que quero
p1.falar() // executo uma ação dentro dessa classe usando meu objeto





const pessoa = nome => { // Com função Arrow
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Coutinho')
p2.falar()