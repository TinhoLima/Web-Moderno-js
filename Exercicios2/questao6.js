// Ele precisa inverter as informaçãoes que eu colocar, menos as strings.

function inverso(param) {
    if (typeof param == 'string') {
        console.log('booleano ou número esperados, mas o parâmetro é do tipo string')
    } else {
        if (param == true) {
            console.log(false)
        } else if (param == false) {
            console.log(true)
        } else {
            if (param < 0) {
                console.log(param * -1)
            } else {
                console.log(param)
            }       
        }
    }
}

inverso(false)
inverso("6")
inverso(-2000)
inverso('Programação')

// function ler(a) {
//     let resultado = new String(a)
//     console.log(typeof a)
// }

// ler("2")

// var nome = 'alison'

// function verificador(param) {
//     if (typeof param == 'string') {
//         console.log('é string')
//     }
// }

// verificador(nome)