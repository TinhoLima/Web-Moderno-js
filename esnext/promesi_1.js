
let p = new Promise(function(cumprirPromessa) { // Promise sempre recebe uma função com um paramentro.
    cumprirPromessa(3)
})

// p - é uma promessa, 
// quando essa promessa é cumprida, ele passa para o seguinte passo: .then()
// Promessas só retornam um único valor.
// Para retornar mais de um valor, necessário transformar em objeto ou array.
    // cumprirPromessa({
    //     x: 3,
    //     y: 4
    // })

    // cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])    

p
    .then(function(valor) { // também recebe uma função como parâmetro e só recebe algo quando a promessa for cumprida.
        console.log(valor)
    }) 
// Podemos usar também o modelo arrow function:
    // p.then(valor => console.log(valor))

// Outro exemplo:
let b = new Promise(function(resolve) { // cumprirPromessa - o nome real do parâmetro padrão é resolve.
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

b
    .then(primeiroElemento) // Pego meu primeiro valor.
    .then(primeiraLetra) // Do meu primeiro valor, pego a primera letra.
    .then(letraMinuscula) // transformando em minuscula.
    .then(console.log) // imprimindo o conteúdo que restou, no caso 1ª letra.
    // Obs: o resultado do primeiro .then(), passa para o próximo e assim por diante, criando uma sequência.