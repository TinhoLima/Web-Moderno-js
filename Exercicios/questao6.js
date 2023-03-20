// ======= Caulculo de Juros =========

function jurosSimples (cpi, txj, tmpa) {
    let juros = cpi * txj * tmpa
    let montante = cpi + juros
    return montante
}

function jurosCompostos (cpi, txj, tempa) {
    let montante = cpi * (1 + txj)
    let jurosComp = montante ** tempa
    return jurosComp
}

console.log(jurosSimples(100,10/100,2))
console.log(jurosCompostos(100,10/100,2).toFixed(2))

// Não sei entender o conceito dessa conta não... Não entendo mt bem matemática.