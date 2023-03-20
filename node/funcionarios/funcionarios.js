const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = funcionario => funcionario.pais == 'China'
const mulheres = funcionario => funcionario.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    // Mulher chinesa com menor salario?
    const pubAlvo = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

        console.log(pubAlvo)
})



// Feito por mim
// axios.get(url).then(response => {
//     const funcionarios = response.data
//     const mulheresChinesas = funcionarios.filter(function(pubAlvo) {
//         if (pubAlvo.pais == 'China' && pubAlvo.genero == 'F') {
//             return pubAlvo
//         }
//     })

//     const menorSalario = mulheresChinesas.map(s => s.salario).reduce(function (acumulado, atual) {
//         return acumulado < atual ? acumulado : atual
//     })

//     const resultado = `O salário mais baixo das mulheres chinesas selecionadas foi de R$${menorSalario}`
    

//     console.log(resultado)
// })

