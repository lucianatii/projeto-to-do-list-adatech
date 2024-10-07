const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title");
const taskButton = document.querySelector("#add-task-button");
const taskList = document.querySelector("#todo-list");

let tasks = [];

form.addEventListener("submit", (event) => {
  event.preventDefault(); //preventDefaut evita que a página seja recarregada ao submeter o formulário

  const taskTitle = taskTitleInput.value;

  console.log(taskTitle);

  if (taskTitle.length < 3) {
    alert("Informe um título maior");

    return; //return evita que o código continue a roda enquanto o titulo da tarefa não tiver mais do que tres caracteres
  }

  //adicionando a nova tarefa ao array de tasks
  tasks.push(taskTitle);
  //adicionando a nova tarefa ao HTML

  const li = document.createElement("li");

  li.textContent = taskTitle; //Adiciona a próxima tarefa - o texto dentro da nova li recebe taskTitle
  taskList.appendChild(li);

  taskTitleInput.value = ""; //limpando o input a cada nova tarefa
});
