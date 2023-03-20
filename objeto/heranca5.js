console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// Toda função tem um atributo chamado .prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
    return this[0]

}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())

// Ele mostrou que omo String, Array e Object, são funções, somos capazes de modificar o comportamento dessas chamadas dos métodos. Que podemos adicionar mais métodos