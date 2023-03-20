console.log(Math.ceil(6.1)) // ceil é teto

const obj1 = {}
obj1.nome = 'Bola' 
// obj1['nome'] = 'Bola' tbm poderia fazer da mesma forma (mas é melhor usar a notação ponto)
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // instanciar a função (this. vc vai receber o atributo nome por paramentro )
    this.exec = function() {
        console.log('Executando...')
    }
    // com this. consegue criar tanto atributos como funções
}
// o prof criou fora tbm... dessa forma,
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
// para mostrar que são independentes um do outro
console.log(obj2)
console.log(obj3)
obj3.exec()

 // maneiro que ele chama