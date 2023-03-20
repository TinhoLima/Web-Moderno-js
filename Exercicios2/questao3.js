// Calculo de salario por horas trabalhadas

function calcularSalario (horasTrabalhadas, valorHora) {
    const resultado = horasTrabalhadas * valorHora
    console.log(`Salário igual a R$ ${resultado}`)
}

calcularSalario(150, 40.5)