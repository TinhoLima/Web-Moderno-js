// "CallBack é quando vc passa uma função e essa função será chamada quando acontecer um evento."

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}\n`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach( fabricantes => console.log(fabricantes)) // Função Arrow

fabricantes.forEach(function (a) { // Função normal.
    console.log(a)
})

/* hmmm... ForEach....
*for Each é uma função que existe para arrays*
    Ele executa por exemplo uma função
    para cada elemento dentro de uma Array


    const numeros = [0,1,2,3,4,5,6]

    function multi (item) {
        console.log(item*2)
    }

    numeros.forEach(multi) e assim ele multiplicou cada elemento.
    multi(numeros) não funciona (NaN).
*/