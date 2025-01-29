alert("Boas vindas ao jogo do número secreto!");

//Math.random() retorna um número aleatório entre 0 e 100 (Inclusos)
//Math.floor() arredonda o número para baixo

let numeroSecreto = Math.floor(Math.random() * 101);

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
  numeroDigitado = prompt("Escolha um número entre 0 e 100");

  if (numeroSecreto == numeroDigitado) {
    alert(
      `Parabéns, o número secreto foi ${numeroDigitado} e você acertou em ${tentativas} tentativas.`
    );
  } else {
    if (numeroSecreto > numeroDigitado) {
      alert(`O número secreto é maior que ${numeroDigitado}`);
    } else {
      alert(`O número secreto é menor que ${numeroDigitado}`);
    }
    tentativas++;
  }
}
