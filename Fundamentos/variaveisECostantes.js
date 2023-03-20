var a = 3
let b = 4 

var a = 30
b = 40  // se usar let aqui de novo, daria erro, diferente do var.

console.log(a, b)

/* [let]
    O pessoal hoje em dia cria variavel com (let)
    é mais popular e melhor hoje em dia se criar variavel desse modo.

    depois de declarado, em JS vc não consegue declarar variavel com o mesmo nome 
    usando (let). Diferente do comportamento (var).
*/

// Depois de declarado variaveis, podemos mudar elas a vontade
a = 300
b = 400

console.log(a, b)

const c = 5 // Constantes não podem ser usadas liberadamente.