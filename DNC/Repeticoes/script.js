for(let x = 0; x <=7; x = x + 1) {
    console.log( `Oi` )
}
console.log('Não me repondeu ainda!')

const bag = [
    'Lápis',
    'Borracha',
    'Caderno',
    'Carteira',
    'Estojo',
    'Caneta'
]

console.log(bag)

for (let i = 0; i <= bag.length; i++) {
    console.log(bag[i])
    if(bag[i] == "Carteira") break
}



n = 0;
x = 0;

while (n < 3) {
    n++;
    x = x + n;
    console.log(x)
}