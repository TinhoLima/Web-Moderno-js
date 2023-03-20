console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[2])

aprovados[3] = 'Alison'
aprovados.push('Vic')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)


console.log(aprovados)
aprovados.sort() // ---> colocou em ortem
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2]) // ----> deletar não mudou a posição dos arrays

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,2) // --------------> splice tbm serve para exclusao. Escolhendo o indice, e depois quantos vc quer excluir apartir desse indice
console.log(aprovados)