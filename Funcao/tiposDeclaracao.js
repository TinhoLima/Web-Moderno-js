// Tipos de declarar uma função...

console.log(soma(3, 4)) /* essa função é executada normalmente.
    Se você testar as outras funções nessa mesma linha elas não vão funcionar.
    Tente mover esta linha console após as funções e testas com suas respectivas funções.
    */

// function declaretion
function soma (x, y) {
    return x + y 
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}


