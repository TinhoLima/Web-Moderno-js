function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`O valor acima do permitido: ${area}m2.`) //forma de concatenar
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2)) // como ele precisava de dois parâmetros, sem o segundo o resultado será undefined por n conseguir calcular.
console.log(area()) // Not a number, por não ter valores para calcular.
console.log(area(2, 3, 17, 22, 44)) // como a função só pede 2 parâmetros ele só vai pegar os dois primeiros.
console.log(area(5, 5)) // como o resultado é maior que 20, ele imprimiu o texto "retornando tbm o resultado undefined".

// professor ta falando que isso é só pra gente ver que isso é válido no JS

