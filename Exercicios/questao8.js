
const pontuacao = [30,40,20,4,51,25,42,38,56,0]
// ["10","20","20","8","25","3","0","30","1"]

function confere (numero) {
    let record = 0
    let maior = numero[0]
    let piorJogo = numero[0]
    
    for (const i in numero) { 
        if (numero[i]>maior) {
            maior = numero[i]
            record ++
        }
        if (numero[i]<piorJogo) {
            piorJogo = i
        }
    }
    return [record,piorJogo]
}

console.log(confere(pontuacao))