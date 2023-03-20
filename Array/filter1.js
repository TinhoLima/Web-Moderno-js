const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: false},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

// eu que fiz
console.log(produtos.filter(function(p) {
    if (p.fragil == true) {
    return p.fragil, p.preco > 20}
}))

// const kro = produtos.filter(function(e) {
//     return e.preco > 500
// }.filter(function(e) {
//     return e.fragil == true
// }))

const kro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(kro).filter(fragil))