function verificador(a, b) {
    let string1 = a.toUpperCase()
    let string2 = b.toUpperCase()
    if (string1 == string2) {
        return true
    } else {
        return false
    }
    
} // retornou se são iguais ou não independente de maiúsculo ou minúsculo, mas o professor foi além do pedido.

console.log(verificador('alison','Alison'))

// SOLUÇÃO DO PROFESSOR
// function verificacaoDeString (string1, string2) {
//     let estaContido = true;
//     for (let i = 0; i < string1.length; i++) {
//         let caractereString1 = string1.charAt(i).toLowerCase()
//         for(let j = 0; j < string2.length; j++){
//             let caractereString2 = string2.charAt(j).toLowerCase()
//             if(caractereString1 == caractereString2) {
//                 estaContido = true
//                 break
//             } else {
//                 estaContido = false
//             }
//         }
//         if(!estaContido) {
//             return estaContido
//         }
//     }
//     return estaContido
//  }

//  console.log(verificacaoDeString('abc','cba')) // mostra independente da posição 