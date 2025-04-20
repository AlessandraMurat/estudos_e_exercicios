// 1-Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc(altura, peso) {
  let imc = peso / (altura * altura);
  console.log(`Seu imc é ${imc.toFixed(2)}`);
  return imc.toFixed(2);
}

imc(1.75, 70);

// 2- Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero) {
  if (numero < 0) {
    return "Número inválido";
  }
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
    console.log(fatorial);
  }

  return fatorial;
}

console.log(fatorial(5));

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversorDolarEmReal(cotacao, dolar) {
  let conversao = cotacao * dolar;
  return conversao.toFixed(2);
}

console.log(conversorDolarEmReal(5.5, 100));

// 4 - Crie uma função que calcule a área e o perímetro de um retângulo, a partir de sua largura e sua altura, que serão passadas como parâmetros.

function calcularAreaEPerimetroRetangular(largura, altura) {
  let area = largura * altura;
  let perimetro = 2 * (largura + altura);
  return `A área é ${area} e o perímetro é ${perimetro}`;
}

console.log(calcularAreaEPerimetroRetangular(5, 5));

// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaEPerimetroCircular(raio) {
  let pi = 3.14;
  let perimetro = 2 * pi * raio;
  let area = pi * (raio * raio);

  return `O perímetro é ${perimetro.toFixed(2)} e a área é ${area.toFixed(2)}`;
}

console.log(calcularAreaEPerimetroCircular(5));

// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(num) {
  for (i = 0; i <= 10; i++) {
    let resultado = i * num;
    console.log(resultado);
  }
}

tabuada(8);
