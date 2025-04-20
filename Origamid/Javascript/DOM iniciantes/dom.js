console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser


const h1Selecionado = document.querySelector('h1')

h1Selecionado.innerText //retorna o texto
h1Selecionado.classList //retorna as classes
h1Selecionado.id //retorna o is
h1Selecionado.offsetHeight //retorna a altura do elemento 

h1Selecionado.addEventListener('click', function() {
  console.log('Clicou no ' + h1Selecionado.innerText)
}) //ativa a função callback ao clicar no titulo
