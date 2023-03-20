// Factory = Fábrica

const prod1 = {
    nome: '----',
    preco: 45
}

const prod2 = {
    nome: '--',
    preco: 23
}
/* --------------- esse método se fosse mts produtos seria mt demorado...
 pra isso temos a função Factory.*/

function criarPessoa () { // Função que pode fabricar um objeto
    return {
        nome: 'laison',
        sobrenome: 'vlogs'
    }
}

console.log(criarPessoa())

// Exemplo no Factory2...