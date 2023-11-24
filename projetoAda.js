function addTask() {
    // Obter a entrada do usuário
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    // Validar se o campo não está vazio
    if (taskText === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    // Criar um novo item de lista
    var newTask = document.createElement("li");
    newTask.textContent = taskText;

    // Adicionar a tarefa à lista
    var taskList = document.getElementById("taskList");
    taskList.appendChild(newTask);

    // Limpar o campo de entrada
    taskInput.value = "";
}
