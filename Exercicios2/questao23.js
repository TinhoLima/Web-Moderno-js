// Receber uma string e retornar quantas palavras tem nela.

function contarPalavras(frase) {
    const resultado = frase.split(" ") // --------- split() dividiu minha string de acordo com o espaço especificado
    console.log(resultado.length)
}

contarPalavras("Sou uma frase")
contarPalavras("Me divirto aprendendo a programar")