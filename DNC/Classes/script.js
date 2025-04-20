const Jogador = function(nome, posicao, numGols) {
    Nome = nome,
    Posicao = posicao,
    Gols = numGols

    this.getNome = function() {
        return Nome
    }
    this.getPosicao = function() {
        return Posicao
    }
    this.getGols = function() {
        return Gols
    }
}

const Neymar = new Jogador('Neymar', 'Atacante', 480)

// Pegar os valor de gols

console.log(Neymar.getGols())

const Renato = new Jogador('Renato', 'Meio campo', 200)
console.log(Renato.getGols())




class Carro {
    constructor (nome, portas, rodas, quilometros) {
        this.nome = nome
        this.portas = portas
        this.rodas = rodas
        this.quilometros = quilometros
    }

    quilometrosRodados() {
        return `O modelo ${this.nome} já rodou ${this.quilometros} quilômetros`
    }

}

const Jeep = new Carro('Jeep', 5, 4, 10000 )
const Fusca = new Carro('Fusca', 4, 4, 90000 )

console.log(Jeep.quilometrosRodados())
console.log(Fusca.quilometrosRodados())