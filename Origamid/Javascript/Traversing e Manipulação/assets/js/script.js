/* const lista = document.querySelector('.animais-lista')


lista.parentElement; //pai 
console.log(lista.parentElement.parentElement); //pai do pai
lista.previousElementSibling; //elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos 
lista.children[0]; //primeiro filho
lista.children[--lista.children.length]; //último filho

lista.querySelectorAll('li'); //todas as Li's
lista.querySelector('li:last-child'); // último Filho

*/


// Manipulando elementos

/*
const lista = document.querySelector('.animais-lista')
const contato = document.querySelector('.contatos')
const titulo =document.querySelector('.titulo')

contato.appendChild(lista);  //Move a lista para o final de contato
contato.insertBefore(lista, titulo); //insere a lista antes do título
contato.removeChild(titulo); // remove o titulo de contato
contato.replaceChild(lista. titulo) // substitui titulo por lista

*/


// Novos Elementos

const animais = document.querySelector('.animais')

const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo Título'
novoH1.classList.add('titulo')

animais.append(novoH1)

// Clonando elementos 

const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true)

faq.appendChild(cloneH1)