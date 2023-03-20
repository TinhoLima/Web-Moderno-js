// Retornar o segundo maior número de um array.

function segundoMaior(array) {
   let maior = 0
   let segundoMaior

   array.forEach((numero, indice) => {
        if ( numero > array[maior]) {
            maior = indice
        }
   });

   array.splice(maior, 1)
   segundoMaior = array[0]

   array.forEach(numero => {
    if (numero > segundoMaior) {
        segundoMaior = numero
    }
   })
   console.log(segundoMaior)
}

segundoMaior([12, 16, 1, 5])