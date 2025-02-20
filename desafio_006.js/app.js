// 1 - Criar uma função que exibe "Olá, mundo!" no console.

function saudacao() {
  console.log("Olá, Mundo!");
}

saudacao();

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacaoComNome(nome) {
  console.log(`Olá, ${nome}!`);
}

saudacaoComNome("Alessandra");

//3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobrarNumero(numero) {
  return numero * 2;
}

console.log(dobrarNumero(5));

//4 - Criar uma função que recebe três números como parâmetros e exibe a média desses números no console.

function media(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(media(10, 10, 10));

//5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maiorNumero(3, 5));

//6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicar(num1) {
  return num1 * num1;
}

console.log(multiplicar(5));
