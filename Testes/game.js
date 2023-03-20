let vida = 1000
let dano = 500
let defesaInimiga = 250
let chanceCritica 
let chanceQuebraDefesa 
let texto 

function statusAtual() {
    console.log(`=== Status do inimigo ====
    Vida atual: ${vida}
==========================\n\n`)
}


function atacar() {
    chanceQuebraDefesa = Math.floor(Math.random() * 5+ 1)
    chanceCritica = Math.floor(Math.random() * 5 + 1)
    let danoReal = dano - defesaInimiga

    if (vida == 0) { // ------ Condição de ataque.
        console.log('Não é possível atacar, inimigo já foi derrotado.')
    } else {
        // ----------------------------- Começo do ataque.
        if (chanceQuebraDefesa == 1) {
            danoReal = dano
            console.log('QUEBRA DE DEFESA *Dano direto aplicado*')
        }

        if (chanceCritica == 1) {
            danoReal *= 1.5
            texto = `         CRÍTICO!!
    ----- ${danoReal} de dano crítico infligido!!\n`
        } else {
            texto = `----- ${danoReal} de dano infligido!\n` 
        }

        vida -= danoReal
        console.log(texto)

        if (vida <= 0) {
            console.log(' Você venceu!\n')
        }

        statusAtual()
    }
}




atacar()
