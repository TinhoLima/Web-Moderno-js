const funcs = [] // aqui ele criou uma função sem nada

//[let]
for (let i = 0; i < 10; i++) {
    // aqui ele ta usando a função vazia dentro do loop
    // Let consegue gravar na memória a posição do i naquele momento.
    funcs.push(function() { // push adiciona novos elementos em uma array
        console.log(i)
    })
}

// essa função funciona por estar dentro do loop
funcs [2]()
funcs [8]()
// aqui ele já consegue puxar as informações que queremos