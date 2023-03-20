// Armazenando uma função em uma variavel

// aqui em baixo minha variavel imprimir... ta recebendo uma função anonima
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow(Arrow Function) em uma variável (novidade do JS)
// (É trocar a palabra [function] por uma setinha [=>])
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// Retorno implícito 
//- usar o return, sem usar essa palavra
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimirTeste = a => console.log(a)
imprimirTeste('Teste da String lá dentro!!')