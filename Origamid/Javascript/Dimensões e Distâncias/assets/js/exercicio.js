// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector("img");

const imgTop = primeiraImg.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const todasImg = document.querySelectorAll("img");
  let soma = 0;

  todasImg.forEach((imagem) => {
    soma += imagem.offsetWidth
  });
  console.log(soma)
}

window.onload = function() {
    somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link) => {
    const linkWidth = link.offsetWidth
    const linkHeight = link.offsetHeight
    if(linkHeight >= 48 && linkWidth >= 48) {
        console.log('Possui acessibilidade')
    } else {
        console.log('Não possui acessibilidade')
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}