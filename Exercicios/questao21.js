function verificador(idade) {
    let valor = 100
    let convenio = 0
    if (idade<10) {
        convenio = 80 + valor
    } else if (idade>=10 && idade<=30) {
        convenio = 50 + valor
    } else if (idade>30 && idade<=60) {
        convenio = 95 + valor
    } else {
        convenio = 130 + valor
    }
    return convenio
}

console.log(verificador(25))
console.log(verificador(9))
console.log(verificador(58))
console.log(verificador(61))