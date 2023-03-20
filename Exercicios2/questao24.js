// Fazer uma função que retorne quantas letras informada no 1º parametro, existem na string do segundo parametro .

function contarCaractere(letra, string) {
    const resultado = string.split(letra)
    console.log(resultado.length -1)

    // OU
    // let contador = 0
    // for (let i = 0; i < string.length; i++) {
    //    if (string.charAt(i) == letra) {
    //     contador++
    //    }
    // }
    // console.log(contador) 
}



contarCaractere("r", "A sorte favorece os audazes")
contarCaractere("c", "Conhece-te a ti mesmo")