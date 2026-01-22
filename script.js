// Captura dos elementos do HTML
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    // Validação
    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Cria o elemento da tarefa
    const li = document.createElement("li");
    li.textContent = taskText;

    // Botão de remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");

    // Evento para remover tarefa
    removeBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // evita conflito com clique no li
        taskList.removeChild(li);
    });

    // Evento para marcar como concluída
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Montagem do item
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Limpa o campo
    taskInput.value = "";
}

// Evento do botão
addTaskBtn.addEventListener("click", addTask);

// Permite adicionar tarefa pressionando Enter
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
