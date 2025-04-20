// Crie uma função para verificar se um valor é Truthy

function verificaTruthy(valor) {
    return !!valor;
}

console.log(verificaTruthy(5))



// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(l) {
    return l * 4
}

document.write(" O peímetro do quadrado é: " + perimetro(5) + '<br>')



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome} `
}

document.write(nomeCompleto('Alessandra', 'Murat'))



// Crie uma função que verifica se um número é par

function numeroPar(numero) {
    if(numero % 2 === 0) {
        console.log(`O numero ${numero} é par `)
    } else {
        console.log(`O numero ${numero} não é par`)
    }
}

numeroPar(4)





// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
    return typeof dado;
}

console.log(tipoDado(5))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
    console.log('Alessandra G. Murat')
})

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
   
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }


  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
  