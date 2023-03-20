function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log()
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (excecao) {
            reject(excecao)
        }
    })
}

funcionarOuNao('Testando...', 0.5) // 50% de chance de errar
    .then(v => `Valor: ${v}`)
    .then(v => console.lo(v))
    .catch(erro => console.log(`Erro: ${erro}`)) // Aqui estamos trandando o erro. Sem essa linha, apesar de exibir nossa msg o erro será tratado pelo próprio node.
    .then(() => console.log('Fim!')) // após um erro, não haverá mais continuação de dados, ou seja, este then não possui nenhum dado anterior.