const escola = "Cod3r" 

/*  [charAt]
*A contagem da posição começa sempre em 0.
*/
console.log(escola.charAt(0)) 
console.log(escola.charAt(4)) // posição do numero na palavra
console.log(escola.charAt(5)) // posição do numero na palavra
console.log(escola.charCodeAt(3)) // Valor unicode(ou tabela asc)
console.log(escola.indexOf('d')) // posição da letra (puxando o index dele)
console.log(escola.substring(1)) // ele conta apartir da letra desejada
console.log(escola.substring(0, 3)) // De um determinado ponto ao outro(sem contar o ultimo)

console.log('Escola '.concat(escola).concat("!")) // string concatenando com uma variavel
// ou...
console.log('Escola ' + escola + '!')


console.log(escola.replace(3, 'e'))  // [replace - substituição] Faz substituição de alguma forma.

console.log('Ana,Maria,Alison'.split(',')) // ray(nao sei se escreve assim) mas é um conceito de separação
// separou por virgula como eu pedi.

// ou...
console.log('Ana,Maria,Alison'.split(/,/)) // (OBS estudo: regex)
