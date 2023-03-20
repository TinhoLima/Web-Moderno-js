// Buscar se o paramaetro informado possui semelhança com as strings passadas

function buscarPalavraSemelhante(busca, palavra) {
    const resultado = []
    
    for (const interacao of palavra) { // -------------> esse laço For...Of é fundamental
        if (interacao.includes(busca)) { // -------------------> Includes() Consegue fazer uma busca por todo o array (vasculha letra por letra)
            resultado.push(interacao)
        }
    }
    console.log(resultado)
}

// EXEMPLO INCLUDES()
// [1, 2, 3].includes(2);      true
// [1, 2, 3].includes(4);      false
// [1, 2, 3].includes(3, 3);   false
// [1, 2, 3].includes(3, -1);  true
// [1, 2, NaN].includes(NaN);  true

//  EXEMPLO FOR...OF
// let iterable = "boo";
// for (let value of iterable) {
//   console.log(value);
// }
// "b"
// "o"
// "o"
buscarPalavraSemelhante('pro', ['programação','mobile', 'profissional'])
buscarPalavraSemelhante('python', ['javascript','java', 'c++'])