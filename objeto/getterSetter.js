// TEMATICA: mostrar sobre modos privados, publicos, etc..

const sequencia = {
    _valor: 1, //Convenção = "mostra aos programadores que ela sera usada internamente."
    get valor() {
        return this._valor++
    },

    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 // Não permitiu
console.log(sequencia.valor, sequencia.valor)