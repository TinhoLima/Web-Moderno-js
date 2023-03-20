function reajuste(plano, salario) {
    switch (plano) {
        case 'A':
            console.log(`Seu salario com o plano A é: RS${(salario)+(salario*10/100)}`)
            break;
        case 'B':
            console.log(`Seu salario com o plano A é: RS${(salario)+(salario*15/100)}`)
            break;
        case 'C':
            console.log(`Seu salario com o plano A é: RS${(salario)+(salario*20/100)}`)
            break;  
        default:
            console.log('Plano inválido.')
            break;
    }
}

reajuste('A',2500)
reajuste('B',2500)
reajuste('C',2500)