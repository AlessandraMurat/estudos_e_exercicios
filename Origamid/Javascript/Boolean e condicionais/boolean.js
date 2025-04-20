//Exemplo 1

/* 
var possuiGraduacao = true

if(possuiGraduacao) {
    document.write("Possui Graduação")
} else {
    document.write("Não possui Graduação")
}

*/


//Exemplo 2

var possuiGraduacao = true
var possuiDoutorado = false


if(possuiDoutorado) {
    document.write("Possui Graduação e doutorado")

} else if (possuiGraduacao) {
    document.write("Possui Graduação, mas não possui doutorado")

} else {
    document.write("Não possui Graduação")
}


// Exemplo 3 com negação 

if(!possuiGraduacao) {
    document.write('Não possui graduação')

} else {
        document.write('<br> Possui graduação')
}


