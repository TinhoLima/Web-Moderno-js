// Fazer o primeiro elemento informado ser repetido pelo numero de vezes informado 

function repetir(elemento1, elemento2) {   
    let vetor = []
    for (let i = 0; i < elemento2; i++) {
        vetor.push(elemento1)
    }
    console.log(vetor)
}

repetir('Código', 2)
repetir(7, 3)