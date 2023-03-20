// estou preparando um modulo para ser exportado.
module.exports = function (...nomes) { // ------> significa passar quantos parametros eu quiser.
    return nomes.map(nome => `Boa semana ${nome}!`)
}

