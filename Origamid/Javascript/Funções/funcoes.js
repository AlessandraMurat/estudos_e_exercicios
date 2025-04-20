function areaQuadrado(lado) {
  return lado * lado;
}

document.write(areaQuadrado(5));
document.write("\n" + areaQuadrado(8));
document.write("\n" + areaQuadrado(20));

// Exemplo 2 Utiliando uma função

function pi() {
  return 3.15;
}

var total = 5 * pi();

document.write("\n" + total);

// Exemplo 3 Arguemntos e parâmetros

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

// Exemplo 4

function corFavorita(cor) {
  if (cor === "Azul") {
    document.write(" <br> Você gosta do mar");
  } else if (cor === "Verde") {
    document.write(" <br> Você gosta da floresta");
  } else {
    document.write(" <br> Você não gosta de nada");
  }
}

corFavorita('Verde');

// Exemplo 5

function terceiraIdade(idade) {

    if(typeof idade !== 'numero') {
        return 'Por favor preencha um número';
        
    } else if(idade >= 60)  {
        return true;
    } else {
        return false 
    }
}


console.log(terceiraIdade('oi'))


// Exemplo 6 Escopo 

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} paises`
}

console.log(faltaVisitar(50))


// Exemplo 7 Escopo Léxico


var profissao = 'Designer';

function dados() {
    var nome = 'Alessandra';
    var idade = 23;

    function outrosDados(){
        var endereco = 'São Paulo';
        var idade = 24
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados()
}

console.log(dados())