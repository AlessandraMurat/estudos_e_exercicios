alert("Boas vindas ao jogo do número secreto!");

//Math.random() retorna um número aleatório entre 0 e 100 (Inclusos)
//Math.floor() arredonda o número para baixo

let numeroSecreto = Math.floor(Math.random() * 101);

let numeroSorteado = prompt("Escolha um número entre 0 e 100");

if (numeroSecreto === numeroSorteado) {
  console.log(`Parabéns, o número sorteado foi ${numeroSorteado}`);
}
