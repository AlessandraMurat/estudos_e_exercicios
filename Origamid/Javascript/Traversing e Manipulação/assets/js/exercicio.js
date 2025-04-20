// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const novoMenu = menu.cloneNode(true)

copy.appendChild(novoMenu)

// Selecione o primeiro DT da dl de Faq

const dlFaq = document.querySelector('.faq')

const primeiroDt = dlFaq.querySelector('dt')

// Selecione o DD referente ao primeiro DT

const proximoDd = primeiroDt.nextElementSibling

// Substitua o conteúdo html de .faq pelo de .animais


const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML