function adicionarTarefa(){

let tarefa = document.getElementById("tarefa").value
let horario = document.getElementById("horario").value
let lista = document.getElementById("lista")

if(tarefa === "") return

let li = document.createElement("li")

li.innerHTML = `
<span onclick="marcarConcluida(this)">
${tarefa} - ${horario}
</span>

<span class="remover" onclick="removerTarefa(this)">X</span>
`

lista.appendChild(li)

document.getElementById("tarefa").value = ""
document.getElementById("horario").value = ""

}

function marcarConcluida(elemento){

elemento.classList.toggle("concluida")

}

function removerTarefa(elemento){

elemento.parentElement.remove()

}
