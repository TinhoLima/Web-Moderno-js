console.log('01)', '1' == 1) // Js vai dizer que são iguais
console.log('02)', '1' === 1) // "===" quer dizer mais profundamente se são a mesma coisa (estritamente igual a ), realmente iguais
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2) // por comparar referencia de memoria eles vão dar falsos
console.log('11)', d1.getTime() === d2.getTime()) // dessa forma da vrdd
console.log('12)', undefined == null)
console.log('13)', undefined === null) // estritamente igual vc n confundi tipos
