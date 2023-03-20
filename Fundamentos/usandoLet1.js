var numero = 1 // ---> idependente daqui ser um var ou let, ele vai respeitar a ordem
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero) 
/* 
*   Por isso let é mais usado no JS, ele não se comporta como o var.
*   [LET] foi criado pq se não teriam que mudar o comportamento do var
*   isso geraria problemas de compatibilidade com versôes mais antigas.
*   uma palavra diferente, que tem um escopo a mais.
*/
