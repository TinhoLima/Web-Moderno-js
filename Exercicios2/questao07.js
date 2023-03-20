// infomar um numero, os outros dois dão valor maximo e minimo.
// precisa infomrar se o numero está entre o max e min. 
// se for passado um parametro "true",será verificado se o numero é igual a max ou min.

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (minimo > maximo) {
        let x = maximo
        maximo = minimo
        minimo = x
    } 

    if (inclusivo == true) {
        if (numero >= minimo && numero <= maximo) {
            console.log(true)
        } else {
            console.log(false)
        }
    } else {
        if (numero > minimo && numero < maximo) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
} 

estaEntre(51, 100, 50)
estaEntre(16, 100, 160)
estaEntre(3, 150, 3)
estaEntre(3, 150, 3, true)