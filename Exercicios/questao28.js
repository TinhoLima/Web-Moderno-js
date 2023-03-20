const vetor = [1,2,3,4,5,6,7,8,9,10,11]

function verificador() {
    let par = []
    let impar = []
    for (const i in vetor) {
        if (vetor[i]%2 == 0) {
            par.push(vetor[i])
        } else {
            impar.push(vetor[i])
        }
    }
    console.log(`${par.length} são pares e ${impar.length} são ímpares.`)
}

verificador()