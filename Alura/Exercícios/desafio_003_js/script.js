// 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

contador = 1;
contador2 = 10;

section = document.querySelector(".container__counter1");

while (contador <= 10) {
  section.innerHTML += `${contador} `;

  contador++;
}

//2. Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.

section2 = document.querySelector(".container__counter2");

while (contador2 >= 0) {
  section2.innerHTML += `${contador2} `;

  contador2--;
}

// 3.Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while.

section3 = document.querySelector(".container__counter3");

digitado = Number(prompt("Digite um número: "));

while (digitado >= 0) {
  section3.innerHTML += `${digitado} `;
  digitado--;
}

//4.Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while.

section4 = document.querySelector(".container__counter4");

contador4 = 0;
digitado2 = Number(prompt("Digite um número: "));

while (contador4 <= digitado2) {
  section4.innerHTML += `${contador4} `;
  contador4++;
}
