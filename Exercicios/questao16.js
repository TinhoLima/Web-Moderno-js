function calcular(x,y,z) {
    switch (y) {
        case '+':
            console.log(`A soma é ${x+z}`)
            break;
        case '-':
            console.log(`A subtração é ${x-z}`)
            break
        case '*':
            console.log(`A multiplicação é ${x*z}`)
            break
        case '/':
            return x / y
            
        default:
            console.log('Operação inválida.')
    }
}
calcular(2,'+',3)
calcular(2,'-',3)
calcular(2,'*',3)
console.log(calcular(2,'/',3)) // ainda não entendi porq está dando NaN...