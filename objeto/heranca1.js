// Professor mostoru um diagrama desses objetos, porém com o campo prototype vazio, a aula aparentemente é explicação desse espaço.

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

//  RESUMINDO, esse __proto__, prototype.... Ele mostra no sentido de herança, quem está acima do que estamos referindo.

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)