function tratarErroELancar(erro) {
    // [throw] significa "lançar"
    //throw new Error('...')
    throw 10 + " - Erro..."
    // assim... era pra rolar um erro nessa aula mas n rolou
    // aqui nessas partes que definimos oq aparece no erro
    // no caso optamos por aparecer o 10 logo, poderia ser diferente
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') // se aqui ocorre um erro, passa pra linha de baixo
    } catch (e) {
        tratarErroELancar(e) //  [catch] pelo que entendi ele chama uma mensagem de erro definida
    } finally {
        console.log('Final') // [finally] já aparece idependente de ter dado erro ou não
    }
}

const obj = {nome: 'Roberto'} // erro em [name] de propósito
imprimirNomeGritado(obj)

// aprendemos aqui como tratar erros...