let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // prof ensinou que fazer isso é como se fosse de forma apressada pra leitura do prog.
console.log(num1)

console.log(++num1 === num2--) // aqui da true pq o menos menos é executado depois.. mt louco
// essa observação de cima é importante pras paradas
// (~deixe seus códigos mais simples possível~)
