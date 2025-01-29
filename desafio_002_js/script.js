// 01.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre

let diaDaSemana = prompt("Qual é o dia da semana?");

if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa Semana!");
}

// 02.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt("Digite um número");

if (numero > 0) {
  alert("O número é positivo");
} else {
  alert("O número é negativo");
}

// 03.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = 25;

if (pontuacao >= 100) {
  alert("parabéns, você venceu!");
} else {
  alert("Tente Novamente!");
}

// 04.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let nome = prompt("Qual é o seu nome?");
let saldo = 1000;

alert(`${nome}, o saldo sa sua conta é de R$ ${saldo}`);

// 05.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

alert(`Boas vindas, ${nome}!`);