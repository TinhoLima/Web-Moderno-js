// crtl + ; - transforma um alinha em código

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // break se associa a [for] ou [while], sempre, por isso que ele iguinora o [if] aqui
    }
    // console.log(x +' = '+ nums[x]) // eu prefiro assim, mas o prof fez como abaixo...
    console.log(`${x} = ${nums[x]}`) // é até mais prático
}
console.log('minha pausinha...')

for (y in nums) {
    if (y == 5) {
        continue // e BREAK só faz sentido agir em estruturas de repetição
    }
    console.log(`${y} = ${nums[y]}`)
    // aqui ele vai diretao, nada mt anormal
}

// outro exemplo - mas o prof falou q n quer a gente fazendo isso...
// não é elegante, podemos quebrar dentro de um método e tal
console.log('minha pausinha...')

externo: for (a in nums) { // externo é um: rótulo
    for (b in nums) {
        if (a == 2 && b == 3) break externo // se fosse só break, ele ia puxar o mais próximo, mas nesse caso quero pouxar do externo.
        console.log(`Par = ${a},${b}`)
    } // quando o loop achou o 2.3, ele foi pro break externo como pedimos
}