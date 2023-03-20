// Cadeia de protótipo (prototype chain)
Object.prototype.att0 = 'Z' //não recomendado.

const avo = {att1: 'A'}
const pai = {__proto__: avo,att2: 'B', att3: '3'}
const filho = {__proto__: pai,att3: 'C'}
console.log(filho.att1) // Ele busca no filho, porém ele encontra no 'avo'
console.log(filho.att0, filho.att1, filho.att2, filho.att3) // aqui ele está buscando os elementos, respeitando a hierarquia da busca.


const carro = {
    velMax: 200,
    velAtual: 0,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

// pai ta boiando