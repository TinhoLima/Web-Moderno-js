/* O this pode variar muito no JavaScript
*/

function Pessoa() {
    this.idade = 0 // Esse this se refere-se apenas a função Pessoa, por enquanto somente.

    setInterval(function() { /* a função setInterval é executada no momento que eu especificar. Ela é um temporalizador.*/
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // O bind amarrou o this de pessoa para a função de temporizador, se não ele ia printar sempre NaN.
} 

new Pessoa


//=============================================================================
// OU...
function Pessoa2 () {
    this.idade = 0
    const self = this

    setInterval( function () {
        self.idade++
        console.log(self.idade)
    },1000)
}

new Pessoa2

/* Pessoas costumas usar esse método para driblar o esquema do this e é funcional como o Bind.*/