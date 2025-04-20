// Retorne o url da página atual utilizando o objeto window

const href = window.location.href

document.write(href)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elementoAtivo  = document.querySelector('.ativo')

// Retorne a linguagem do navegador

const linguagemNavegador = window.navigator.language
document.write('<br>' + linguagemNavegador)


// Retorne a largura da janela 

const larguraJanela = window.innerWidth

document.write('<br> A largura da janela é :' + larguraJanela)