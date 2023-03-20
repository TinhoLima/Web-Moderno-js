// Crie uma função que receba um array de produtos e retorne o total das despesas.

function despesasTotais(obj) {
    const mostrarPreco = valor => valor.preco
    console.log(obj.map(mostrarPreco).reduce(function soma(acumulador, atual) {
        return acumulador + atual
    }))
}

despesasTotais([
    {nome: "Jornal online",  categoria: 'Informação', preco: 89.99},
    {nome: "Cinema",  categoria: 'Entretenimento', preco: 150}
])

despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.99}
])