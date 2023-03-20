// Factory = Fábrica
function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Playstation 5', 4.500))
console.log(criarProduto('PC Gamer', 3.000))
console.log(criarProduto('Notebook', 4.300))

// copiar uma linha de código (shift + alt + baixo ou cima)