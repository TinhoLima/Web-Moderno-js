function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4500,
    desc: 0.15,
    getPreco // isso aqui meio que vincula com a função sla
}

console.log(getPreco()) /* Dá NaN pq não tem número definido, claro, a menos que eu defina um no global
    global.preco = 20
    global.desc = 0.1 */
console.log(produto.getPreco()) // Valor normal

// ====== Outras formas para executar isso seria pelo CALL e APPLY. =====================
const carro = {preco: 11000, desc: 0.35}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro)) // Tudo normal por aqui, nada de diferente...

console.log(getPreco.call(carro, 0.17, '$')) // Alterou o imposto do getPreco e a Moeda.
console.log(getPreco.apply(carro, [0.17, '$'])) // Aplly só funciona da mesma forma, botando as informações em um Arrya.

/** A diferença é 
 * passamos parâmentros de formas diferentes.
 */