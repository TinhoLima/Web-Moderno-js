// Função que mostre o símbolo + quantas vezes for especificado.

function simboloMais(quantidade) {
    let simbolo = '+'
    let armazenamento = ''
    for (let i = 0; i < quantidade; i++) {
        armazenamento = armazenamento.concat(simbolo)
    }
    console.log(armazenamento)
}

simboloMais(2)
simboloMais(4)