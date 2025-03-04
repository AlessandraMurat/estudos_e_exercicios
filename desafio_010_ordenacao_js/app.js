let crescente = document.getElementById("crescente");
let decrescente = document.getElementById("decrescente");
let button = document.getElementById("button");

function isPalindromo() {
  crescente.textContent = "";
  decrescente.textContent = "";
  numeros = [];

  setTimeout(() => {
    let quantidade = prompt("Digite a quantidade de números para ordenar:");

    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
      let numero = prompt(`Digite o ${i + 1}º número:`);

      numeros.push(numero);
    }

    var resultadoCrescente = [...numeros].sort((a, b) => a - b);
    var resultadoDecrescente = [...numeros].sort((a, b) => b - a);

    crescente.textContent = `Os números em ordem crescente são: ${resultadoCrescente}`;
    decrescente.textContent = `Os números em ordem decrescente são: ${resultadoDecrescente}`;

    button.innerHTML = "Novos Números";
  }, 50);
}
