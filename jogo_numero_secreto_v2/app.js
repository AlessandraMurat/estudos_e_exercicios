// let title = document.querySelector("h1");
// let paragraph = document.querySelector(".texto__paragrafo");

// title.innerHTML = "Jogo so número secreto";
// paragraph.innerHTML = "Escolha um número entre 1 e 10.";
let numMax = 100;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(tag, texto) {
  let elemento = document.querySelector(tag);
  elemento.innerHTML = texto;
}

function verificarChute() {
  let chute = document.querySelector(".container__input").value;

  if (numeroSecreto == chute) {
    console.log("Acertou!");
  } else {
    console.log("Errou!");
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * numMax + 1);
}

exibirTexto("h1", "Jogo do número secreto");
exibirTexto(".texto__paragrafo", `Escolha um número entre 1 e ${numMax}.`);
