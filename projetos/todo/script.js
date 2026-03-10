function adicionarTarefa(){

let tarefaInput = document.getElementById("tarefa")
let horaInput = document.getElementById("hora")
let lista = document.getElementById("lista")

let tarefa = tarefaInput.value
let hora = horaInput.value

if(tarefa === ""){

alert("Digite uma tarefa")

return

}

let li = document.createElement("li")

let texto = document.createElement("span")

texto.innerHTML = tarefa + " - " + hora

let check = document.createElement("span")

check.innerHTML = "✔"

check.classList.add("check")

check.onclick = function(){

texto.classList.toggle("concluida")

}

li.appendChild(check)

li.appendChild(texto)

lista.appendChild(li)

tarefaInput.value = ""
horaInput.value = ""

}
