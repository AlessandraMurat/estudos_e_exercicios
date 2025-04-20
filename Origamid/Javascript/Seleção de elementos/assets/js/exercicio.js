// Retorne no console todas as imagens do site

const todasImagens = document.querySelectorAll('img')
console.log(todasImagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const selecionadas = document.querySelectorAll('img[src^="assets/img/imagem"]')
console.log(selecionadas)



// Selecione todos os links internos (onde o href começa com #)]

const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao

const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length-1])