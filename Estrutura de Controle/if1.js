function boaNoticia(nota) {
    if (nota >= 7) {
        console.log("Congratulations... Você passou com "+nota)
    } else {
        console.log("Tu é um lixo! Reprovaado!")
    }
}

boaNoticia(6.9)
boaNoticia(7.6)

function seForVerdadeiroEuFalo(valor) {
    if (valor) { // se vc não fizer nenhum tipo de comparação ele entende como Boolean
        console.log('É verdade...' + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined) // oq nem precisa pq nem faz sentido
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(false)
// note que até parametro vazio é dado como falso.

seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(true)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([]) // matriz
seForVerdadeiroEuFalo([1,2])
seForVerdadeiroEuFalo({}) // objeto
