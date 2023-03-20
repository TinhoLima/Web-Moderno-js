function pedido(cod,qtd) {
    let produto
    let preco
    switch (cod) {
        case 100:
            produto = `Cachorro quente`
            preco = 3.00
            console.log(`${produto} (${qtd})un. - Total R$${preco*qtd}`)
            break;
        case 200:
            produto = 'Hambúrguer Simples'
            preco = 4.00
            console.log(`${produto} (${qtd})un. - Total R$${preco*qtd}`)
            break;
        case 300:
            produto = 'Cheeseburguer'
            preco = 5.50
            console.log(`${produto} (${qtd})un. - Total R$${preco*qtd}`)
            break;
        case 400:
            produto = 'Bauru'
            preco = 7.50
            console.log(`${produto} (${qtd})un. - Total R$${preco*qtd}`)
            break;
        case 500:
            produto = 'Refrigerante'
            preco = 3.50
            console.log(`${produto} (${qtd})un. - Total R$${preco*qtd}`)
            break;
        case 600:
            produto = 'Suco'
            preco = 2.80
            console.log(`${produto} (${qtd})un. - Total R$${preco*qtd}`)
            break;
        default:
            console.log('Código de produto inexistente.')
            break;
    }
}

pedido(100,2)
pedido(200,1)
pedido(300,3)
pedido(400,4)
pedido(500,6)
pedido(600,4)