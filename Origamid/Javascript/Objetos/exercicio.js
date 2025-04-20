// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var meuNome = {
    nome: 'Alessandra',
    sobrenome: 'Murat'
}

// Crie um método no objeto anterior, que mostre o seu nome completo

meuNome.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}



// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000 
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var cachorro = {
      raca: 'labrador',
      cor: 'preto',
      idade: 10,
      latir(pessoa) {
          if(pessoa === 'homem') {
              return 'Au Au Au!'
          } else {
              return 'Não se junto com a gentalha'
          }
      }

  }



// nomeie 3 propriedades ou métodos de strings

var nome = 'Alessandra'
document.write('<br>' + nome.repeat(7))
document.write('<br>' + nome.toUpperCase())
document.write('<br>' + nome.startsWith('ss', 3))



// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn')

//  document.write(btn.after('Testando after'))
//  document.write(btn.remove('.btn'))
// console.log(btn.id)
// console.log(btn.isConnected)
// document.write(btn.prepend('teste prepend'))


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//clipboard.js