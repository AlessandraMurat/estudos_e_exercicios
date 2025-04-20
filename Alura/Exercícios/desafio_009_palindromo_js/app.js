let resultado = document.getElementById("resultado");
let button = document.getElementById("button");

function isPalindromo() {
  resultado.textContent = "";
  setTimeout(() => {
    var str = prompt("Digite uma palavra para verificar se é um palíndromo:");
    var separarletras = str.split("");
    var inverterletras = separarletras.reverse();
    var juntarletras = inverterletras.join("");

    if (str == juntarletras) {
      resultado.textContent = "A palavra " + str + " é um palíndromo";
    } else {
      resultado.textContent = "A palavra " + str + " não é um palíndromo";
    }

    button.innerHTML = "Nova Verificação";
  }, 10);
}
