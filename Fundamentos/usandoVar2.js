var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero) 
    /* [var], independente de onde estiver,
    a variavel (numero) sempre vai imprimir na tela o ultimo valor.
    Ela não respeita os blocos.
    difetente do [let]... */