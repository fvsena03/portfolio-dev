function gerarSenha(){

let tamanho = document.getElementById("tamanho").value

let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"

let senha = ""

for(let i = 0; i < tamanho; i++){

let random = Math.floor(Math.random() * caracteres.length)

senha += caracteres[random]

}

document.getElementById("senha").value = senha

}

function copiarSenha(){

let campo = document.getElementById("senha")

campo.select()

document.execCommand("copy")

alert("Senha copiada!")

}