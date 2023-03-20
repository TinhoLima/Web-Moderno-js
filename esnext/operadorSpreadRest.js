// Operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Alison', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoB = ['Maria',...grupoA, 'Rafaela']
console.log(grupoB)

