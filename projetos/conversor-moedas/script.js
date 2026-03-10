function converter(){

let valor = document.getElementById("valor").value
let moeda = document.getElementById("moeda").value
let resultado = document.getElementById("resultado")

let dolar = 5.00
let euro = 5.40

if(valor === ""){

resultado.innerHTML = "Digite um valor."

return

}

if(moeda === "dolar"){

let conversao = valor / dolar

resultado.innerHTML = "US$ " + conversao.toFixed(2)

}

else{

let conversao = valor / euro

resultado.innerHTML = "€ " + conversao.toFixed(2)

}

}
