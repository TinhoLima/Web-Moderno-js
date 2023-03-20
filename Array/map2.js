const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços\


// const convert = carrinho.map(function(e) {
//     console.log(JSON.parse(e))
//     const select = convert.map()
// })

const transformar = produto => JSON.parse(produto)
const mostrarPreco = produto => produto.preco

const preco = carrinho.map(transformar).map(mostrarPreco)

console.log(preco)