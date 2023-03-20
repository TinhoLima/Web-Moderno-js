function contas (x, y) {
    const soma = `Soma: ${x + y}`
    const sub = `Subtração: ${x - y}`
    const multi = `Multiplicação: ${x * y}`
    const div = `Divisão: ${x / y}`
    return console.log(soma, sub, multi, div)
}

contas(5, 2)