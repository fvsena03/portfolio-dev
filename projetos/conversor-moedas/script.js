function converter(){

let valor = document.getElementById("valor").value

let moeda = document.getElementById("moeda").value

let resultado = document.getElementById("resultado")

let taxaDolar = 5.00
let taxaEuro = 5.40

if(moeda === "dolar"){

resultado.innerHTML = "US$ " + (valor / taxaDolar).toFixed(2)

}

else{

resultado.innerHTML = "€ " + (valor / taxaEuro).toFixed(2)

}

}