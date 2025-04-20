var pessoa = {
  nome: 'Alessandra',
  idade: 23
}

// Exemplo 2 com função

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return lado * this.lados;
  }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

// Exemplo 3 Abreviação de Função

var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado
  },
  perimetro(lado) {
    return this.lados * lado
  }
}

console.log(quadrado.area(8))
console.log(quadrado.perimetro(8))

// Exemplo 4

var menu = {
  widt: 800,
  height: 50,
  backgroundColor: '#84A'
}

menu.backgroundColor = 'red'
menu.color= 'blue'
var bg = menu.backgroundColor

// Exemplo 5 Tudo é objeto

var nome = 'Alessandra'

console.log(nome.length)
console.log(nome.replace('dra', 'dro'))
console.log(nome);
console.log(nome.charAt(1))


// Exemplo 6 com numeros 

var numero = 1.8

console.log(numero.toString());
numero.toFixed()


// Exemplo 7 com funções 

function areaQuadrado(lado) {
  return lado * lado
}

areaQuadrado.toString(); // Irá retornar a funçaõ em steing

areaQuadrado.length //Irá retornar o total de parâmetros passados na funçao

// Exemplo 8 com elementos do DOM

var btn = document.querySelector('.btn')

btn.classList.add('.azul') //Adiciona uma classe azul
btn.innerText;
btn.addEventListener('click', function() {
  alert('Clicou')
})





















