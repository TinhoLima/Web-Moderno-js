// Filtrar um array puxando apenas os tipos Number do array informado.

function filtrarNumeros(vetor) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        if (typeof vetor[i] == 'number')  {
            resultado.push(vetor[i])
        }
        
    }
    console.log(resultado)
}   

filtrarNumeros(["javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])