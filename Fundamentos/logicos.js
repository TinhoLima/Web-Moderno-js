function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv = trabalho1 && trabalho2
    //const comprarGame = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarGame = trabalho1 != trabalho2 // diferente
    const manterSaudavel = !comprarSorvete // negação lógica(operador unario)
    return {comprarSorvete, comprarTv, comprarGame, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))