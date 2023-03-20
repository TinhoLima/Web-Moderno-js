// [Array] = Matriz... são conhecidos por []
const valores = [7.7, 0.1, 2.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4]) // a contagem sempre começa de 0

valores[4] = 10 // aqui a gente já anexou um valor no lugar 4
console.log(valores)

valores[10] = 5.6 // aqui ele coloca o valor mas mostra 5 itens faltando no meio
console.log(valores)

console.log(valores.length) // informa quantos elementos tem em uma array(Matriz)

valores.push({id: 3}, false, null, 'teste') // mostra minha array inteira
/* push ele não mostra minha array inteira eu acho
ele adiciona coisas no final da minha array...
*/
console.log(valores)

// deletar um valor de uma array...
console.log(valores.pop()) // essa função retira meu ultimo array
delete valores[0]
console.log(valores)

console.log(typeof valores) // array em JS é um [Objeto].

