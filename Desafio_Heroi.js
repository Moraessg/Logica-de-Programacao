var nomeHeroi = "Batman"
var XpHeroi = 8050

if (XpHeroi<= 1000){
    console.log("O herói " + nomeHeroi + " está no nível Ferro")
}
else if (XpHeroi >= 1001 && XpHeroi <= 2000){
    console.log("O herói " + nomeHeroi + " está no nível Bronze")
}
else if (XpHeroi >= 2001 && XpHeroi < 5000){
    console.log("O herói " + nomeHeroi + " está no nível Prata")
}
else if (XpHeroi >= 5001 && XpHeroi <= 7000){
    console.log("O herói " + nomeHeroi + " está no nível Ouro")
}
else if (XpHeroi >= 7001 && XpHeroi <= 8000){
    console.log("O herói " + nomeHeroi + " está no nível Platina")
}
else if (XpHeroi >= 8001 && XpHeroi <= 9000){
    console.log("O herói " + nomeHeroi + " está no nível Ascendente")
}
else if (XpHeroi >= 9001 && XpHeroi <= 10000){
    console.log("O herói " + nomeHeroi + " está no nível Imortal")
}
else {
    console.log("O herói " + nomeHeroi + " está no nível Radiante")
}
