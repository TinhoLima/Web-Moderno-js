function resultado (base = 1,expoente =1) {
    // meu modo
    let potencia = base
    for (let i = 1; i < expoente; i++) {
        potencia *=base
    }

    // CORREÇÃO DO PROFESSOR:
    // let potencia = base ** expoente

    return `Potência de ${base} elevado a ${expoente} = ${potencia}`
}

console.log(resultado(2, 3))