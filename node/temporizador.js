// O javascript já possui seus temporizadores, mas trateremos com outra forma de temporizador instalando o (npm i node-schedule)

const { constant } = require('lodash')
const schedule = require('node-schedule')

// Qualquer ação dentro dessa função, será executada com o temporizador.
const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 1', function() { // de 5 em 5 segundos, apartir de 11h iguinorando mes e ano, segunda-feira.
    console.log('executando tarefa 1!', new Date().getSeconds())
})

// usando o temporizador javascript para cancelar o temporizador da tarefa1.
setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando tarefa1')
}, 10000)

// Criando regras para que o schedule sejá executado.
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // será executado de seg a sexta.
regra.hour = 11 // acontecerá as 11h 
regra.second = 10 // será executada apenas quando o relógio alcançar exatos 10s

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa2!', new Date().getSeconds())
})