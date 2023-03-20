
// Inverter as chaves por valores e valores pelas chaves de um objeto.


function inverter(objeto1) {
    Object.entries(objeto1).forEach(([key, value]) => { // --------> Object.entries() mostra o conteúdo do objeto em formato de array
        console.log(`{${value}: "${key}"}`)
    })

    // OPCAO 1
    // const objetoInvertido = {}
    // Object.entries(objeto).forEach( parChaveValor => {
    // const chave = 0,
    // valor = 1
    // objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    // })
    // return objetoInvertido

    // OPCAO 2
    // const paresDeChaveValorInvertidos = Object.entries(objeto)
    // .map( parChaveValor => parChaveValor.reverse() )
    // return Object.fromEntries(paresDeChaveValorInvertidos)
}

inverter({a: 1, b: 2, c: 3})