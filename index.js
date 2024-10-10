
function rank (vitoria, derrota){
	let subtracao = vitoria - derrota
    return subtracao    
}

let x = 100
let y = 50
let subtracao = rank (x,y)

let resultado = subtracao

if(resultado <= 10){
	resultado = "Ferro"
} else if (resultado <= 20){
	resultado = "bronze"
} else if (resultado <= 50){
	resultado = "Prata"
} else if (resultado <= 80){
	resultado = "Ouro"
} else if (resultado <= 90){
	resultado = "Diamante"
} else if (resultado <= 100){
	resultado = "Lendário"
} else{
	resultado = "Imortal"
}

console.log ("O herói tem o saldo de " + subtracao + " vitorias", "e está no nível de " + resultado)
