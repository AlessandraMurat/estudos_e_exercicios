const menu = document.querySelector('.menu')



menu.className; //String
menu.classList; //Lista de classes
menu.classList.add('ativo') // Adiciona classe
menu.classList.add('ativo', 'mobile') //Adiciona 2 classes
menu.classList.remove('ativo') // remove a classe
menu.classList.toggle('ativo') //Adiciona/remove classe


//true ou false

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
} else {
    menu.classList.add('nao-possui-azul')
}



menu.classList.replace('ativo', 'inativo') //troca a classe


// ATTRIBUTES

const animais = document.querySelector('.animais')

console.log(animais.attributes); // Retorna todos os atributos
console.log(animais.attributes[0]); // Retorna o primeiro atributo



// getAttribute e setAtribute

const img = document.querySelector('img');

console.log(img.getAttribute('src')) //Valor do src
img.setAttribute('alt', 'Texto alternativo') //altera o alt
img.hasAttribute('id') // true ou false
img.removeAttribute('alt') // remove o alt

img.hasAttribute(); //true /false se tem algum atributo


// Read Only vs writable 

animais.className; //String com o nome das classes
animais.className = azul; // Substitui completamente a string 
animais.className += vermelho; //Adiciona verelho a String 
// animais.attributes = 'class="ativo"'; // Não funciona, read only