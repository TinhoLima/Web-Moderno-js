// Não aceita repetição/ não é indexado

const times = new Set()
times.add('Flamengo')
times.add('São paulo').add('Palmeiras').add('Vasco')
times.add('Flamengo')


console.log(times)
console.log(times.size)
console.log(times.has('Vasco')) // has - mostra se esse valor está contido dentro do set.
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Alison','Lucas', 'Raquel', 'Bianca', 'Alison']
const nomesSet = new Set(nomes)
console.log(nomesSet)