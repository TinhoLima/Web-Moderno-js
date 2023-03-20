// Demonstração de modos de criar um objeto.

const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
// Não precisa mais ser feito desse modo

const obj2 = {a,b,c}
// agora podemos fazer de uma forma mais direta
console.log(obj1,obj2)


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)


const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// Acrescentando uma função no objeto.
const obj5 = {
    funcao1: function() {
        //.... Forma antiga
    },
    funcao2() {
        // forma nova
    }
}
console.log(obj5)