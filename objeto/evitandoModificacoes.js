// Object.preventExtensions  ------> Ele priva seu objeto de recever mais atributos. Você pode modifica-los, exclui-los, mas não pode inserir novos atributos. :3

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.drescicao = 'Borracha escolar branca'
delete produto.tag // Deletando uma propriedade de um objeto.
console.log(produto)

// Object.seal           ---------------------------> Ele sela o seu objeto. Só permite modificar os atributos existentes.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)


// Object.freeze         -----------------------------> semelhante ao selamento.