let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)

/* O parâmetro que eu passei encontra-se em escala global, blz...
Se eu usar o bind posso fazer ele apontar pra onde eu quero
veja:
*/

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // aqui ele já da o resultado False por ter sido apontado pelo bind pra algum lugar.
comparaComThis(obj) // como o bind aponta pra cá, ele mostra True.

// Método Arrow.
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // novamente, ele mostra False por ter deixado o This fixado no arrow.
comparaComThisArrow(module.exports)

// agora testando se o BIND consegue redirecionar o This, dentro de uma arrow.
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // Arrow Function é superior ao Bind, não conseguimos mudar.
comparaComThisArrow(module.exports)