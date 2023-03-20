// retornar a area de um triângulo, com duas casas decimais

function areaDoTriangulo(base, altura) {
    const area = (base * altura) / 2
    console.log(area.toFixed(2).replace('.',','))
}

areaDoTriangulo(10, 15)
areaDoTriangulo(7, 9)
areaDoTriangulo(9.25, 13.1)