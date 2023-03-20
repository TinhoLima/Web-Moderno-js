const anonimo = process.argv.indexOf('-a') != -1
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n') // stdout = Standard output (saída padrão)
    process.exit() // finalizando a aplicação.
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // stdin = Standard input (entrada padrão)
        // Evento On data - vai acontecer depois de pressionar a tecla Enter.
        const nome = data.toString().replace('\n','') // removendo o espaço que o enter coloca.

        process.stdout.write(`Fala ${nome}\n`) // imprimindo...
        process.exit()
    })
}

