function adicionarTarefa(){

const tarefa = document.getElementById("tarefa").value
const horario = document.getElementById("horario").value

if(tarefa === ""){
alert("Digite uma tarefa")
return
}

const lista = document.getElementById("lista")

const item = document.createElement("li")

item.innerHTML = `
<span>${tarefa} - ${horario}</span>

<div class="acoes">

<button onclick="concluir(this)">✔</button>

<button class="remover" onclick="remover(this)">X</button>

</div>
`

lista.appendChild(item)

document.getElementById("tarefa").value=""
document.getElementById("horario").value=""

}

function concluir(botao){

const tarefa = botao.parentElement.parentElement

tarefa.classList.toggle("concluida")

}

function remover(botao){

const tarefa = botao.parentElement.parentElement

tarefa.remove()

}