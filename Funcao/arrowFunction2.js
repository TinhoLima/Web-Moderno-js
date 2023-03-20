function Pessoa () {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa

/* Dentro de uma arrow, o this é fixo exclusivamente para o arrow
    Por isso aqui nosso temporizador funciona sem o método BIND.

    Arrow function é lindo.
 */