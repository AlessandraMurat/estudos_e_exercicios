const listaAnimais = document.querySelector(".animais-lista");

//Height

listaAnimais.clientHeight; //Height + padding
listaAnimais.offsetHeight; //Height + padding + border
listaAnimais.scrollHeight; //Height total, mesmo dentro de scroll

//Width

listaAnimais.clientWidth; //Width + padding
listaAnimais.offsetWidth; //Width + padding + border
listaAnimais.scrollWidth; //Width total, mesmo dentro de scroll

// offsetTop e offsetLeft

const section = document.querySelector("section");

// Distancia entre o topo do elemento e o topo da página

section.offsetTop;

// Distancia entre o canto esquerdo do elemento e o canto esquerdo da página

section.offsetLeft;

// getBoundingClientRect()

const primeiroh2 = document.querySelector("h2");

const rectH2 = primeiroh2.getBoundingClientRect();

console.log(rectH2.top);

// Window

// console.log(

// window.innerWidth, // width da janela
// window.outerWidth, // soma dev tools também
// window.innerHeight, // height da janela
// window.outerHeight // Soma a barra de endereço

// )
// window.pageYOffset // distância total do scroll vertical
// window.pageXOffset // distância total do scroll horizontal

const faq = document.querySelector(".faq");

const rectFac = faq.getBoundingClientRect();

if (rectFac.top < 0) console.log("faq passou");



const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}
