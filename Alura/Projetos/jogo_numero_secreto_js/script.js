alert("Boas vindas ao jogo do número secreto!");

//Math.random() retorna um número aleatório entre 0 e 100 (Inclusos)
//Math.floor() arredonda o número para baixo

// let numeroSecreto = Math.floor(Math.random() * 101);


let numMax = 7000;
let numeroSecreto = parseInt(Math.random() * numMax + 1);

let numeroDigitado;
let tentativas = 1;

// if (numeroSecreto === numeroDigitado) {
//   console.log(`Parabéns, o número secreto foi ${numeroDigitado}`);
// } else {
//   if (numeroSecreto > numeroDigitado) {
//     alert(`O número secreto é maior que ${numeroDigitado}`);
//   } else {

//     alert(`O número secreto é menor que ${numeroDigitado}`);
//   }
// }

while (numeroSecreto != numeroDigitado) {
numeroDigitado = Number(prompt(`Escolha um número entre 0 e ${numMax}`));

  if (numeroSecreto == numeroDigitado) {
    break;
  } else {
    if (numeroSecreto > numeroDigitado) {
      alert(`O número secreto é maior que ${numeroDigitado}`);
    } else {
      alert(`O número secreto é menor que ${numeroDigitado}`);
    }
    tentativas++;
  }
}

alert(
  `Parabéns, o número secreto foi ${numeroDigitado} e você acertou em ${tentativas} tentativas.`
);

// if (tentativas > 1) {
//   alert(`Parabéns, o número secreto foi ${numeroDigitado} e você acertou em ${tentativas} tentativas.`);
// } else {
//   alert(`Parabéns, o número secreto foi ${numeroDigitado} e você acertou em ${tentativas} tentativa.`);
// }

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `Parabéns, o número secreto foi ${numeroDigitado} e você acertou em ${tentativas} ${palavraTentativa}.`
);
