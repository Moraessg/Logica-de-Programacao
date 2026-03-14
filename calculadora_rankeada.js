function classificacao(resultado_partidas){
    if (resultado_partidas<= 10)
    return "Ferro"
    else if (resultado_partidas >= 11 && resultado_partidas <= 20)
    return "Bronze"
    else if (resultado_partidas >= 21 && resultado_partidas < 50)
    return "Prata"
    else if (resultado_partidas >= 51 && resultado_partidas <= 80)
    return "Ouro"
    else if (resultado_partidas >= 81 && resultado_partidas <= 90)
    return "Diamante"
    else if (resultado_partidas >= 91 && resultado_partidas <= 100)
    return "Lendário"
    else return "Radiante"
}

function calcularClassificacao(vitorias, derrotas){
    var resultado_partidas = vitorias - derrotas
    return resultado_partidas
}

let vitorias = 200
let derrotas = 50
let resultado_partidas = calcularClassificacao(vitorias, derrotas)
console.log(`O Heroi tem saldo de ${resultado_partidas} e esta no nivel ${classificacao(resultado_partidas)} `)