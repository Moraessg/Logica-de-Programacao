class Heroi{
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }
    
    ataque(){
        let ataque = ""
        if (this.tipo == "mago"){
            ataque = "Magia"
    }
        else if (this.tipo == "ninja"){
            ataque = "Shuriken"
    }
        else if (this.tipo == "guerreiro"){
            ataque = "Espada"
        }
        else{
            ataque = "Artes Marciais"
        }
        this.mensagem(ataque)


    }
    mensagem(ataque){
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
            }

}
    
let heroi = new Heroi ("Gabriel", 26, "mago")

heroi.ataque()