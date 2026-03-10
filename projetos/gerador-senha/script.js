function gerarSenha(){

let tamanho = document.getElementById("tamanho").value

let usarMaiusculas = document.getElementById("maiusculas").checked
let usarNumeros = document.getElementById("numeros").checked
let usarSimbolos = document.getElementById("simbolos").checked

let letras = "abcdefghijklmnopqrstuvwxyz"
let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numeros = "0123456789"
let simbolos = "!@#$%&*"

let caracteres = letras

if(usarMaiusculas) caracteres += maiusculas
if(usarNumeros) caracteres += numeros
if(usarSimbolos) caracteres += simbolos

let senha = ""

for(let i = 0; i < tamanho; i++){

let random = Math.floor(Math.random() * caracteres.length)

senha += caracteres[random]

}

document.getElementById("senha").value = senha

avaliarForca(senha)

}

function copiarSenha(){

let campo = document.getElementById("senha")

campo.select()

document.execCommand("copy")

alert("Senha copiada!")

}

function avaliarForca(senha){

let forca = document.getElementById("forca")

if(senha.length < 8){

forca.innerHTML = "Força da senha: fraca"

}

else if(senha.length < 12){

forca.innerHTML = "Força da senha: média"

}

else{

forca.innerHTML = "Força da senha: forte"

}

}
