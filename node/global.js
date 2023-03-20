// console.log(global)
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}) // Se eu congelar com o Object.freeze aí protegemos de isso ser mudado globalmente.