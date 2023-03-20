// Exemplo de callBack no browser

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu! ')
    // nem chegou a usar o elemento da função 'e'...
}
