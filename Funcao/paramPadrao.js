// estragia 1 para gerar valor padrão
// gerar um valor padrão caso o primeiro valor n seja informado.

function soma1(a, b, c) {
    a = a || 1
    b = b || 1 // por exemplo, se o valor B inserido for falso, ele vai me retornar o 1
    c = c || 1
    return a + b + c
}

console.log(" sem parâmetros ele retorna: "+soma1())
console.log(" somente o valor A foi informado gerando a soma: "+soma1(3))
console.log(" aqui todos os parâmetros funcionaram. "+soma1(1, 2, 3))
console.log(" o valor zero nessa questão retonra falso... "+soma1(0, 0, 0))
console.log(" se uma string form informada ele irá concatenar todo o resultado: "+soma1('a'))

console.log('\n')
// estrategia 2 3 e 4 para gerar valor padrão.

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0, 0, 0))
console.log()

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
// po tivemos todo aquele rolê pra isso aqui fazer o mesmo ¬.¬