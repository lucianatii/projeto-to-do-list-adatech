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
    alert("Seu título é muito curto. Informe um título maior.");

    return; //return evita que o código continue a roda enquanto o titulo da tarefa não tiver mais do que tres caracteres
  }

  //adicionando a nova tarefa ao array de tasks
  tasks.push({
    title: taskTitle,
    done: false,
  });

  //salvando adição de tarefas no localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks))

  //adicionando a nova tarefa ao HTML
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox"); //definindo que meu input a ser criado é um  checkbox
  input.addEventListener('change', (event) => {
    const liToToggle = event.target.parentElement;

    //conferindo se o input está marcado como checked
    const done = event.target.checked

    //pegando span a ser alterada ao concluir tarefa
    const spanToToggle = liToToggle.querySelector('span')

    if(done) {
      spanToToggle.style.textDecoration = 'line-through'
    } else {
      spanToToggle.style.textDecoration = 'none'
    }

  tasks = tasks.map(t => {
  if (t.title === spanToToggle.textContent) {
      return {
            title: t.title,
            done: !t.done,
          }
        }
      return t
    })

     //salvando alteração de tarefas no localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks))
  })

  const span = document.createElement('span');
  span.textContent = taskTitle;

  const button = document.createElement("button");
  button.textContent = "Remover";
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;

    const titleToRemove = liToRemove.querySelector('span').textContent;

    tasks = tasks.filter(t => t.title !== titleToRemove);

    taskList.removeChild(liToRemove);

    //salvando adição de tarefas no localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks))
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  //li.textContent = taskTitle; //Adiciona a próxima tarefa - o texto dentro da nova li recebe taskTitle
  taskList.appendChild(li);

  taskTitleInput.value = ""; //limpando o input a cada nova tarefa
})
