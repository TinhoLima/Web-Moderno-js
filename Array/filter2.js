Array.prototype.filter2 = function(callback) {
    const newFilter = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newFilter.push(this[i])
        }
    }
    return newFilter
}

// Array.prototype.filter2 = function(callback) {
//     const newFilter = []
//     for (let i = 0; i < this.length; i++) {
//         newFilter.push(callback(this[i], i, this))
//     }
//     return newFilter
// }

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

const kro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(kro).filter2(fragil))