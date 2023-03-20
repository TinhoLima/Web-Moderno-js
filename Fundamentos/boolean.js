let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) 
/* 
* transformar um valor em true ou false,
precisamos usar a negação(!) para funcionar.
* se usarmos duas (!!) ele anula o efeito da negação e volta ao original.
* fazendo com que nosso valor seja verdadeiro.
*/
console.log('Os verdadeiros... ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Só pra finalizar...')  // não entendi muito bem...
console.log(!!('' || null || 0 || 'epa'))

console.log('Olha que legal')
let nome = ''
console.log(nome || 'Desconhecido')