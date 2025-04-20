//Exemplo 1 Operador &&

if (5 - 5 && 5 + 5) {
  document.write("Verdadeiro");
} else {
  document.write("Falso");
}

if (5 - 10 && 5 + 5) {
  document.write("<br> Verdadeiro");
} else {
  document.write("<b r>Falso");
}

var condicional = 5 - 10 && 5 + 5;

if (condicional) {
  document.write(`<br> Verdadeiro, ${condicional}`);
} else {
  document.write("<b r>Falso");
}

//Exemplo 2 Operador ||

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;

//Exemplo 3 Switch

var corFavorita = "Rosa";

switch (corFavorita) {
  case "Azul":
    alert("Olhe para o céu...");
    break;
  case "Verde":
    alert("Olhe para o pasto...");
    break;
  case "Cinza":
    alert("Pegue um ônibus...");
    break;
  case "Rosa":
    alert("Encontre uma borboleta...");
    break;
    default:
        alert('Feche os olhos')
}
