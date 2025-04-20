// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'


var minhaIdade = 24;
var idadeParente = 16;

if(minhaIdade > idadeParente) {
    document.write('É maior')
} else if(minhaIdade === idadeParente) {
    document.write('É igual')
} else {
    document.write('É menor')
}



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

document.write(' <br> ' + expressao)



// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    document.write(' <br> Brasil tem mais habitantes que a china')
}else if(brasil === china) {
    document.write(' <br> Brasil e china tem a mesma quantidade de habitantes')
} else {
    document.write(' <br> China tem mais habitantes')
}




// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}