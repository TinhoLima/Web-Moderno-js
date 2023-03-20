// For Of - opera em cima de valores ao invés de índices.
for (let letra of 'Cod3r') {
    console.log(letra)
}

//Exemplo
const assuntosEcma = ['Map', 'Set', 'Promise']

// Pegando o indice
for (const i in assuntosEcma) {
    console.log(i)
}

// pegando os valores
for (const assunto of assuntosEcma) {
    console.log(assunto)
    
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (const assunto of assuntosMap) {
    console.log(assunto)
}

for (const chave of assuntosMap.keys()) {
    console.log(chave)
}

for (const valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}