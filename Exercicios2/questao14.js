function objetoArray(obj) {
    const resultado = []

    for (const key in obj) { // -------------------------------> O laço For In, é usado especialmente nesses casos. O for normal não teve o mesmo efeito.
       resultado.push([key, obj[key]])
    }

    // for (let i = 0; i < obj.length; i++) {
    //     resultado.push([i, obj[i]])
    // }
    console.log(resultado)
}

objetoArray({
    nome: "Maria",
    profissao: "Desenvolvedora de Software"
})

objetoArray({
    codigo: 1111,
    preco: 12000
})