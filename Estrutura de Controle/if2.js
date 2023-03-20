function teste1(num) {
    if (num > 7) {
        console.log(num)
        console.log('Final')
    } 
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7)
        ; // por ter esse sinal, ele imprime os 2 números por parar no ';' e depois ler oq tem a seguir
        // não usar com as estruturas de controler (if e talz)
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)
