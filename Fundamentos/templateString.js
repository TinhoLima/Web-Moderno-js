const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
// [Template] - ele permite quebrarmos linha no meio de Strings
// contendo algumas regrinhas como abaixo (é algo novo do JS 2015):
const template = `
    Olá 
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`) // Template

//  isso aqui o prof comentou que é uma funçao...
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')} !`) // Template String
