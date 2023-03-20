function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min

            if(numerosProibidos.includes(aleatorio)) {
                reject('Número repetido detectado!')
            } else {
                resolve(aleatorio)
            }
        })
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) { // Toda função que é marcada por asyncrona retona uma promessa.
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (error) { // Catch siginifca retornar uma exceção, signifcando a rejeição de uma promise porque não deu certo.
        if (tentativas >= 10 ) {
            throw `Não deu certo... Numero de tentativas: ${tentativas}`
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

// gerarNumerosEntre(1, 5, [1, 2, 4]) // Só seram aceitos os números 3 e 5.
//     .then(console.log)
//     .catch(erro => console.log(`Erro: ${erro}`))