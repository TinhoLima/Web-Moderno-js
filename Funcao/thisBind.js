const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // acessando o atributo de um objeto
    }
} 
pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00
// pra mim ele só n puxou nada pq essa função n pode ser puxada assim estando dentro do objeto
console.log(falar)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

/* Pelo que entendi esse é um método novo. 
    Permite a mesma ação sem o uso do THIS e as vezes pode ser mais interessante,
    ele permite criar uma constante especificando: O objeto, seu atributo,
    e usamos esse recurso chamado BIND evidenciando o objeto em parenteses.
*/