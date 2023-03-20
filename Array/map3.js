Array.prototype.map2 = function(callback) {
    const newMap = []
    for (let i = 0; i < this.length; i++) {
        newMap.push(callback(this[i], i, this))
    }
    return newMap
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const transformar = produto => JSON.parse(produto)
const mostrarPreco = produto => produto.preco

const preco = carrinho.map2(transformar).map2(mostrarPreco)

console.log(preco)