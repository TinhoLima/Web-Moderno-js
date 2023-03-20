// retornar se o ano informado é bissexto verificado se ele é multiplo de 4 sem ser multiplo de 100 exceto se ele tbm for multiplo de 400.

function anoBissexto(ano) {
    const multiploDe4 = ano % 4 == 0
    const multiploDe100 = ano % 100 == 0
    const multiploDe400 = ano % 400 == 0

    console.log(multiploDe4 && !multiploDe100 || multiploDe400)
}

anoBissexto(2020)
anoBissexto(2100)