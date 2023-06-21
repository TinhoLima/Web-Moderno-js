const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// pilotos.pop() 
// massa quebrou o carro --------------------> pop() remove o último elemento.
console.log(pilotos.pop())

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // --------> Remove o primeiro elemento da Lista, semelhante ao pop()
console.log(pilotos)

pilotos.unshift('Hamilton') // ------> adciona no primeiro indice
console.log(pilotos)

// Splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1,) // massa quebrou dnv
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Gera um novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)