const animais = document.getElementById('animais') 
// console.log(animais.innerText)


// Exemplo 2 com ClassName

// const gridSection = document.getElementsByClassName('grid-section')

// Tambem podemos selecionar um item espefico dessa array, utilizando []  e passando o índice
// console.log(gridSection[2]) 



// Exemplo 3 Seletor geral único 

// Pega pelo seletor classe 
const animais2 = document.querySelector('.animais');
// Pega pelo ID
const contato = document.querySelector('#contatos');
// Pega o último itemd a lista
const ultimoItem = document.querySelector('.animais-lista li:last-child');
// Pega por link
const linkInterno = document.querySelector('[href^="#');
console.log(linkInterno)
// Pega a primeira ul
const primeiroUl = document.querySelector('ul');
console.log(primeiroUl)

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');


// Exemplo 4 Seletor Geral listas
const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(fotosAnimais)

// Retorna o segundo elemento
console.log(gridSection[1]);