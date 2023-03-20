function calcularAnuidade(mes, valor) {
    let juros = 0.05
    let resposta = 0
    switch (mes) {
        case 1:
            console.log(`Mensalidade de R$ ${valor} paga com sucesso!`)
            break;
        case 2:
            resposta = (valor*(juros*1))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 3:
            resposta = (valor*(juros*2))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 4:
            resposta = (valor*(juros*3))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 5:
            resposta = (valor*(juros*4))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 6:
            resposta = (valor*(juros*5))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 7:
            resposta = (valor*(juros*6))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 8:
            resposta = (valor*(juros*7))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 9:
            resposta = (valor*(juros*8))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 10:
            resposta = (valor*(juros*9))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 11:
            resposta = (valor*(juros*10))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
        case 12:
            resposta = (valor*(juros*11))+valor
            console.log(`Total da mensalidade com juros R$ ${resposta}`)
            break;
    
        default:
            console.log('Erro.')
            break;
    }
}   
calcularAnuidade(1,350)
calcularAnuidade(2,350)
calcularAnuidade(3,350)
calcularAnuidade(4,350)
calcularAnuidade(5,350)