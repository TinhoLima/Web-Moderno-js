const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

function removerVogais(frase) {
        const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
        vogais.forEach( vogal => frase = frase.replace(vogal, '') )
        return frase
}

console.log(removerVogais("fundamentos"))