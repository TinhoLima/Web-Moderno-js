function verificador(inicio = 0, fim = 100) {
    let comeco
    let final
    if (inicio > fim) {
        comeco = fim
        final = inicio
    } 
        for (let i = comeco; i <= final; i++) {
            if (i% 2 != 0) {
                console.log(i)
            }
        }
    
}

verificador(10, 5)