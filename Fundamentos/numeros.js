const peso1 = 1.5 
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2))
// Teste para saber se o valor é inteiro.
// Ele só entenderia que não é inteiro caso fosse [1.5] por exemplo.

const avalicao1 = 9.871
const avalicao2 = 6.987

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //Converte em 2 casas decimais.
console.log(media.toString(2))  //Converte em binário.
console.log(typeof media)
console.log(typeof Number)