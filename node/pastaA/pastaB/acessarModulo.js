const moduloA = require('../../moduloA')
// C:\Users\aliso\Documents\GitHub\Home\Organizacao-js\node\moduloA.js   -----> funcionaria da mesma forma colocando em require() *sevindo somente localmente*.
console.log(moduloA.ola)


const saudacao = require('saudacao') // Buscou pelo nome do modulo e automaticamente executou o index.js (somente o index).
console.log(saudacao.ola)

const c = require('./pastaC') // procurando o arquivo index.js automaticamente.
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('bom dia')
//     res.end()
// }).listen(8080)