function fruta(nome) {
    switch (nome) {
        case "maçã":
            return "Não vendemos essa fruta aqui."
        break
        case "kiwi":
            return "Estamos com escassez de kiwis."
        break
        case "melancia":
            return "Aqui está, são 3 reais o quilo."
        break    
        default:
            return "erro."
    }
}

console.log(fruta("melancia"))