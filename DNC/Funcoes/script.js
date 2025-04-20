function gift (money, value) {
    if(money < value) {
        return 'Dinheiro insuficiente para comprar o presente'
    } else {
        return 'Você realmente precisa fazer essa compra?'
    }
}

console.log(gift(100, 90));