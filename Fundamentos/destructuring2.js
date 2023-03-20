// agora usando a estrututa array (matriz)
const [a] = [10]
console.log(a)

const [n1, , n3, n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// é meio que vc desestruturar algo e atribuir outras coisas

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota) // pedii pra ele iguinorar certas informações e pegar uma só

