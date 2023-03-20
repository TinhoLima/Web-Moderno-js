const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') 
/*  Cuidado...
    por ser pouco tipado ele lê a String 
    mas automaticamente mostra o valor false por não ter como comparar
    com números... 
*/

