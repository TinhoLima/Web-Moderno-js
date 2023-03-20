const funcs = [] // aqui ele criou uma função sem nada

//[var]
for (var i = 0; i < 10; i++) {
    funcs.push(function() { // push adiciona novos elementos em uma array
        console.log(i)
    })
}

funcs [2]()
funcs [8]()
// Nesses resultados ele imprimi [10] por conta do var