
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve() ,tempo);
    })
}

// esperarPor()
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor() { // Definindo o valor 10 para uma promise retornar em 5 segundos.
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 5000);
    })
}

async function retornarValorRapido() {
    return 20
}


async function executar() { // Toda função que é marcada por asyncrona retona uma promessa.
    let valor = await retornarValorRapido() // Await faz com que o valor seja extraído, só quando a promise for resolvida.

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
    // Obs: Sem o await, a função executar retornaria os 3 consoles de uma vez só após os 5seg.

    return valor + 3 // esse retorno não é imprimido sem o uso de um .then() na função.
}

executar()
    .then(console.log)