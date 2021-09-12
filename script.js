const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskCounter = document.querySelector("span.counter");
const taskList = document.querySelector("li.task");
const input = document.querySelector(".input_task");

const removeTask = (e) => {
  e.target.parentNode.remove();
  const tasksLength = document.querySelectorAll("li.task").length;
  taskCounter.textContent = tasksLength;
};

const doneTask = (e) => {
  e.target.parentNode.style.textDecoration = "line-through";
  const tasksLength = document.querySelectorAll("li.task").length;
  taskCounter.textContent = tasksLength;
};

const addTask = (e) => {
  e.preventDefault();

  const taskName = input.value;
  if (taskName === "") return;

  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML =
    taskName +
    `<button class="btn_delete"><i class="far fa-trash-alt"></i></button><button class="btn_done"><i class="fas fa-check"></i></button>`;
  ul.appendChild(task);
  input.value = "";

  const tasksLength = document.querySelectorAll("li.task").length;
  taskCounter.textContent = tasksLength;

  task.querySelector(".btn_delete").addEventListener("click", removeTask);
  task.querySelector(".btn_done").addEventListener("click", doneTask);
};

form.addEventListener("submit", addTask);
