const obj = {a: 1, b: 2, c: 3, soma() {return a + b + C}}
console.log(JSON.stringify(obj)) // ----------------------------> estamos convertendo nosso objeto a uma linguagem JSON.

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
// console.log(JSON.parse("{ 'a: 1', 'b: 2'}"))
console.log(JSON.parse('{ "a":1, "b":2, "c":3 }'))
console.log(JSON.parse('{ "a":1.7, "b": "string", "c":true, "d":{}, "e": [] }'))
