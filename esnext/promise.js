// Eu criei uma função, que recebe dois parametros e retorna uma promessa.

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //Aceita apenas 1 parametro.
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Quel legal!')
    .then(frase => frase.concat('???'))
    .then(outraFrase => console.log(outraFrase)) 
    // .then() gera um encadeamento de operações (podemos usar quantas vezes quiser.)
    .catch(e => console.log(e)) 
    // usado para tratamento do erro (apenas uma vez).
