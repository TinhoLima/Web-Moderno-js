function verificador() {
    let negativos = 0
    for (const i in vetor) {
        if (vetor[i] < 0) {
            negativos++
        }
    }
    console.log(negativos)
}

vetor = [ -7, 8, 9, 10, -11, 12, 16, 17, 18, 19, 20, 21, 4, 5, 6]

verificador()