const todo = document.getElementById("todo");
const todoList = document.getElementById("todo-list");
const todoListInput = document.querySelector("#todo input");
const todoKey = "todos";
todoListInput.classList.add("classInput");

let toDos = [];

function saveToDos() {
  localStorage.setItem(todoKey, JSON.stringify(toDos));
}

function deleteBtn(e) {
  const li = e.target.parentElement;
  toDos = toDos.filter((ToDo) => ToDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paint(newinput) {
  const li = document.createElement("li");
  li.classList.add("li-List");
  li.id = newinput.id;
  const span = document.createElement("span");
  span.innerText = newinput.text;
  span.classList.add("List");
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.classList.add("btn");
  btn.addEventListener("click", deleteBtn);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handle(e) {
  e.preventDefault();
  const newinput = todoListInput.value;
  todoListInput.value = "";
  const newTodoObj = {
    text: newinput,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paint(newTodoObj);
  saveToDos();
}

todo.addEventListener("submit", handle);

const saveDDos = localStorage.getItem(todoKey);

if (saveDDos !== null) {
  const parsedToDos = JSON.parse(saveDDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paint);
}
