// if (condicao) {
//     se a condição for verdadeira executa...
// } else {
//     se condição for falsa executa...
// }

var dinheiro = 90;
// console.log(`Eu possuo R$ ${dinheiro}`)

if (dinheiro > 50) {
    // console.log("Consigo comprar o presente")
} else {
    // console.log("Não consigo comprar o presente")
}

// var selecao = 'Brasil'

// if (selecao == 'Brasil' || selecao == 'Argentina' || selecao == 'Uruguai') {
//     console.log(`${selecao} já ganhou a copa!`)
// } else {
//     console.log(`${selecao} nunca ganhou a copa do mundo!`)
// }


var selecao = 'Argentina'

if (selecao == 'Brasil' ) {
    console.log(`${selecao} já ganhou 5 vezes a copa!`)
} else if(selecao == 'Argentina' || selecao == 'Uruguai') {
    console.log(`${selecao} já ganhou 2 vezes a copa!`)
} else {
    console.log(`${selecao} nunca ganhou a copa do mundo!`)
}