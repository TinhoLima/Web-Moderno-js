const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) { 
    console.log('nota '+i+': '+notas[i])
}
/* o IN ele é usado pelo que entendi, com arrays
ele usa com base na quantidade de array e só finda a minha variavel
que nesse caso é o [i], se o meu array acabar*/
console.log()

const pessoa = {
    nome: 'Alison',
    sobrenome: 'Coutinho',
    idade: 24,
    peso: 67
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa [atributo]}`)
}

console.log(atributo)