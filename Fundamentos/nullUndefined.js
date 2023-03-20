//[Undefined]... (não inicializado ainda)
let valor 
console.log(valor) // Não existe valor atribuido a ela

valor = null // Ausência de valor
console.log(valor) 
/*
* Mostra que não há valor, que está nulo, diferente de Undefined
* se vc quer que essa variavel deixe de ter um valor, ponha null
* voce meio que zera a variável (Sempre uso null pra isso).
*/

const produto = {} // Uma constante que recebe um objeto
console.log(produto.preco) // temos definido o produto, menos o preço
produto.preco = 3.55
console.log(produto)

produto.preco = undefined // evitar atribuir undefined...
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log()