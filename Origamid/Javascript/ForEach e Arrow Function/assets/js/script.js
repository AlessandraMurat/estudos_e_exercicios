// const imgs = document.querySelectorAll('img')

// imgs.forEach(function(item, index, array) {
//     console.log(item); // o item atual no loop
//     console.log(index); // o número do index
//     console.log(array); // a Array completa

// });

// exemplo 2 forEach e Array

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
//   console.log(item);
});


// exemplo 3 Arrow Function 

const imgs = document.querySelectorAll('img')

imgs.forEach((item, index) => {
    console.log(item, index); // o item atual no loop
  
});


// Argumentos e Parenteses

const imgs2 = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imgs2.forEach(item => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs2.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});


//  Exemplos com return 

const imgs = document.querySelectorAll('img');

imgs.forEach(item => 
  console.log(item)
);

imgs.forEach(item => console.log(item));



