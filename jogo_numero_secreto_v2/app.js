// let title = document.querySelector("h1");
// let paragraph = document.querySelector(".texto__paragrafo");

// title.innerHTML = "Jogo so número secreto";
// paragraph.innerHTML = "Escolha um número entre 1 e 10.";
let listaDeNumerosSorteados = [];
let numMax = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
  let elemento = document.querySelector(tag);
  elemento.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTexto("h1", "Jogo do número secreto");
  exibirTexto(".texto__paragrafo", `Escolha um número entre 1 e ${numMax}.`);
}
exibirMensagemInicial();

function gerarNumeroAleatorio() {
  let numeroSorteado = parseInt(Math.random() * numMax + 1);
  let quantidadeItems = numMax;
  if (quantidadeItems === listaDeNumerosSorteados.length) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroSorteado)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroSorteado);
    return numeroSorteado;
  }
}

function ativarBotao() {
  let botao = document.getElementById("reiniciar");
  botao.removeAttribute("disabled");
}
function desativarBotao() {
  let botao = document.getElementById("reiniciar");
  botao.setAttribute("disabled", true);
}

function verificarChute() {
  let chute = document.querySelector(".container__input").value;

  let textoTentativas =
    tentativas > 1 ? `${tentativas} tentativas` : `${tentativas} tentativa`;

  let mensagem = `Parabéns! Você acertou o número secreto com ${textoTentativas}.`;

  if (chute == numeroSecreto) {
    exibirTexto("h1", "Você Acertou!");
    exibirTexto(".texto__paragrafo", mensagem);
    ativarBotao();
  } else {
    if (chute > numeroSecreto) {
      exibirTexto("h1", "Opss! Tente Novamente");
      exibirTexto(".texto__paragrafo", "O número secreto é menor.");
    } else {
      exibirTexto("h1", "Opss!");
      exibirTexto(".texto__paragrafo", "O número secreto é maior.");
    }
    tentativas++;
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector(".container__input").value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  exibirMensagemInicial();
  limparCampo();
  desativarBotao();
}
