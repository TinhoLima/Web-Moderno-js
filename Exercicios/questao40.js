function notas(vnotas) {
    for (const i in vnotas) {
        if (vnotas[i] <= 4.9) {
            vnotas[i] = "D"
        } else if (vnotas[i] >= 5.0 && vnotas[i] <= 6.9) {
            vnotas[i] = "C"
        } else if (vnotas[i] >= 7.0 && vnotas[i] <= 8.9) {
            vnotas[i] = "B"
        } else {
            vnotas[i] = "A"
        }
    }

    console.log(vnotas)
}
nota = [5.5, 6.9, 2.5, 4.5, 7.5, 10, 8.5]

notas(nota)