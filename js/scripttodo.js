let $ = document;
const inputElem = $.getElementById("itemInput");
const addButton = $.getElementById("addButton");
const clearButton = $.getElementById("clearButton");
const todoListElem = $.getElementById("todoList");

let todosArray = [];

function addNewTodo() {
  let newTodoTitle = inputElem.value;

  let newTodoObj = {
    id: todosArray.length + 1,
    title: newTodoTitle,
    complete: false,
  };

  inputElem.value = "";
  inputElem.focus();
  todosArray.push(newTodoObj);
  setLocalStorage(todosArray);
  todosGenerator(todosArray);
}

function setLocalStorage(todosList) {
  localStorage.setItem("todos", JSON.stringify(todosList));
}

function todosGenerator(todosList) {
  let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn;
  todoListElem.innerHTML = "";
  todosList.forEach(function (todo) {
    newTodoLiElem = $.createElement("li");
    newTodoLiElem.className = "completed well";

    newTodoLabalElem = $.createElement("label");
    newTodoLabalElem.innerHTML = todo.title;

    newTodoCompleteBtn = $.createElement("button");
    newTodoCompleteBtn.className = "btn btn-success";
    newTodoCompleteBtn.innerHTML = "Complete";

    newTodoDeleteBtn = $.createElement("button");
    newTodoDeleteBtn.className = "btn btn-danger";
    newTodoDeleteBtn.innerHTML = "Delete";
    newTodoDeleteBtn.setAttribute("onclick", "deleteOnItem(" + todo.id + ")");
    if (todo.complete) {
      newTodoLiElem.className = "uncompleted well";
      newTodoCompleteBtn.innerHTML = "UnComplete";
    }
    newTodoLiElem.append(
      newTodoLabalElem,
      newTodoCompleteBtn,
      newTodoDeleteBtn
    );

    todoListElem.append(newTodoLiElem);
    newTodoCompleteBtn.setAttribute("onclick", "CompleteTodo(" + todo.id + ")");
  });
}
function deleteOnItem(todoId) {
  let getItemLocalStorage = JSON.parse(localStorage.getItem("todos"));
  todosArray = getItemLocalStorage;
  let mineTodoIndex = todosArray.findIndex(function (todo) {
    return todo.id === todoId;
  });
  todosArray.splice(mineTodoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todosArray));
  todosGenerator(todosArray);
  console.log(getItemLocalStorage);

  console.log(todosArray);
}

function CompleteTodo(todoId) {
  let getItemLocalStorage = JSON.parse(localStorage.getItem("todos"));
  todosArray = getItemLocalStorage;
  todosArray.forEach(function (todo) {
    if (todo.id === todoId) {
      todo.complete = !todo.complete;
    }
  });
  setLocalStorage(todosArray);
  todosGenerator(todosArray);
}
function remmeberTodolist() {
  let getItemLocalStorage = JSON.parse(localStorage.getItem("todos"));
  if (getItemLocalStorage) {
    todosArray = getItemLocalStorage;
  } else {
    todosArray = [];
  }
  todosGenerator(todosArray);
}
function addTodoForKyBord(event) {
  if (event.keyCode === 13) {
    addNewTodo();
  }
}
function deleteTodoForDomAndLocalStorage() {
  localStorage.removeItem("todos");
  remmeberTodolist();
}
inputElem.addEventListener("keypress", addTodoForKyBord);
window.addEventListener("load", remmeberTodolist);
addButton.addEventListener("click", addNewTodo);
clearButton.addEventListener("click", deleteTodoForDomAndLocalStorage);
