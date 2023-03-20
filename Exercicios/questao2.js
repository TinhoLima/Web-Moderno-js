function verificador(x, y, z) {
    if (x == y & y == z) {
        console.log('Equilátero: Todos os lados iguais.')
    } else {
        if (x == y || y == z || x == z) {
            console.log('Isósceles: No mínimo dois lados iguais.')
        } else {
                console.log('Escaleno: Todos os lados são diferentes.')
        }
    }
}

console.log('===== Triangulo =====')
verificador(5,1,5)
verificador(2,4,5)
verificador(5,5,5)