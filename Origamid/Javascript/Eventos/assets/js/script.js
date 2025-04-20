const img = document.querySelector("img");

// img.addEventListener('click', function() {
//   console.log('Clicou!!')
// })

// Exemplo 2 com callback

function callback() {
  console.log("Clicou");
}

img.addEventListener("click", callback);

// Exemplo 3 com Event

const img2 = document.querySelectorAll("img");

function evento(event) {
  console.log(event);
}

img2[1].addEventListener("click", evento);

// Exemplo 4 Algumas propriedades com event

const animais = document.querySelector(".animais-lista");

function executarCallback(event) {
  const currentTarget = event.currentTarget; //Referente ao item que eu selecionei no caso do exemplo(.animais-lista)
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path; //caminho do elemento
  console.log(currentTarget, target, type, path);
}

animais.addEventListener("click", executarCallback);

// Exemplo 5 event.preventDefault()

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
  console.log(this); //retorna o elemento selecionado e com o this podemos usar os métodos e propriedades
  console.log(event.currentTarget); //retorna o elemento selecionado
}

linkExterno.addEventListener("click", clickNoLink);


// Exemplo 6 Diferentes eventos 

const h1 = document.querySelector('h1')

function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', handleEvent)
h1.addEventListener('mouseenter', handleEvent)
h1.addEventListener('mousemove', handleEvent)


window.addEventListener('scroll', handleEvent)
window.addEventListener('resize', handleEvent)
window.addEventListener('keydown', handleEvent)

// Exemplo 7 keyboard 

function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);

// Exemplo 8 forEach e eventos

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});


// Exemplo 9 outerHTML, innerHTML e innerText

// const h1 = document.querySelector('h1')

// console.log(h1.outerHTML); //todo o html do elemento
// console.log(h1.innerText); // texto sem tags

// console.log(h1.innerHTML) = '<p>Novo Texto</p>'; // a tag vai como texto
// console.log(h1.innerText) = '<p>Novo Texto</p>'; // redenriza a tag

const h2 = document.querySelector('h2');
console.log(h2)


h2.outerHTML; // todo o html do elemento
h2.innerHTML; // html interno
h2.innerText; // texto, sem tags


h2.innerHTML = '<p>Texto</p>'; // a tag é renderizada

h2.innerText = '<p>Texto</p>'; // a tag vai como texto