let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Retorno implícito.
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // professor prefere trabalhar dessa forma.
ola = _ => 'Olá' // Esse parâmetro tbm é válido.
console.log(ola())