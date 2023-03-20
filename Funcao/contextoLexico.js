const valor = 'Global'

function minhaFuncao () {
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Imprime o Global, mesmo definindo um valor diferente dentro de exec, ela executa o que está dentro do seu escopo, puxando asssim o global que já está definido no console.
