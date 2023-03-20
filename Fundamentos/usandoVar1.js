{
    { // var é impresso independente de estar no mesmo bloco ou não.
        {
            { 
                var sera = 'Será?? '
            }
        }
    }
}
console.log(sera) // mesmo ela não estando dentro do mesmo bloco, ela aparece, diferente de outras linguagens

function teste() { // escopo da function, só é visível dentra da function
    var local = 123
    console.log(local)
}

teste() // quando chamo a função, ela só vai mostrar os resultados quando estiver com console..
//console.log(local) // ele não permite fazer isso por estar dentro de uma function.