// criar de forma literal
function fun1() { return "função 1"}

// colocar função em uma variável
const fun2 = function() { return "Função 2"}

const array = [function (a, b) {return a + b}, fun1, fun2] /*podemos add as funções que criamos lá em cima tbm, sem problemas*/
console.log(array[0](2,3))