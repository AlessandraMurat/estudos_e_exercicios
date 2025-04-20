let jogador = {
    nome: 'Renato Augusto',
    idade: 34,
    gols: 81,
    Gol(g=0){
        console.log('Renato fez gol')
        this.gols += g
    }
}

// console.log(jogador)
// console.log(jogador.gols)

// Adicionando uma nova propriedade no objeto 
jogador.posicao = 'Meio campista'
// console.log(jogador)

// Deletar informações do objeto

delete jogador.idade

// console.log(jogador)

// Adicionando arrays no objeto

let position  = 'atacante';


let player = {
    nome: 'Neymar Jr',
    position
}

player.times =['Santos', 'Barcelona', 'Paris Saint German']
// console.log(player)

// console.log(player.times[0])

var selecao = [
    {
        nome: 'Neymar',
        funcao: 'Atacante'
    },
    {
        nome: 'Renato',
        funcao: 'Meio Campo'
    },
    {
        nome: 'Rogério',
        funcao: 'Goleiro'
    }
]


// Acessando o nome do terceiro objeto

console.log(selecao[2].nome)
