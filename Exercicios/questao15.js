function escolha(carro) {
    switch (carro) {
        case "hatch":
            console.log('Compra efetuda com sucesso!')
            break;
        case "sedans":
        case "motocicletas":
        case "caminhonetes":
            console.log('Tem certeza que não prefere este modelo?')
        break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui.')
            break;
    }
}

escolha('caminhonetes')