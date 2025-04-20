var videoGames = ['Switch', 'PS4', 'XBox']

console.log(videoGames[0])
console.log(videoGames[2])


videoGames.pop(); //Remove o último item e retorna ele
videoGames.push('PS3'); //Adiciona no final da Array
videoGames.length


// Exemplo 2 for loop 

for (var numero = 0; numero < 10; numero++) {
  document.write(numero+ ' ')
}


// Exemplo 3 while loop 

var i = 0;

while( i <= 10) {
  document.write('<br>' + i);
  i = i+5;
}


// Exemplo 4 loop com array

var frutas  = ['Banana', 'Abacaxi', 'Pessego', 'Morango']

for(var item = 0; item < frutas.length; item++) {
  document.write(` <br>
  ${frutas[item]} `);
}

// Exemplo 5 array, loop e break


var alimentos  = ['Arroz', 'Feijão', 'Açúcar', 'Café']

for(var item = 0; item < alimentos.length; item++) {
  document.write(` <br>
  ${alimentos[item]} `); 
  if(alimentos[item] === 'Feijão') {
    break
  }
}

// Exemplo 6 forEach

var legumes = ['Cenoura', 'Batata', 'Abobrinha', 'berinjela'];
legumes.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
