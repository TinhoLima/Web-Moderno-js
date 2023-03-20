// Inserir uma string e retornar ela sem as vogais.

function removerVogais(string) {
    const vogais = ['a','e','i','o','u']

    for (const i in vogais) {
        for (const interacao of string) {
            if (interacao.includes(vogais[i])) { // ----------> includes() vasculha letra por letra
               string =  string.replace(vogais[i],'')
            }
        }
    }

    console.log(string)

    // function removerVogais(frase) {
    //     const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    //     vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    //     return frase
    //     }
    
}


removerVogais("Cod3r")
removerVogais("Fundamentos")