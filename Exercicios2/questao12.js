// Remover uma propriedade de um objeto e mostrar seu estado final.

function removerPropriedade(objeto, parametro) {
    delete objeto[parametro]
    console.log(objeto)
}


removerPropriedade({a: 1, b: 2 }, "a")
removerPropriedade({
    id: 20,
    nome: 'Caneta',
    descricao: "não preenchido"
}, "descricao")