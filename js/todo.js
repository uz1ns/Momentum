const todoFrom = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

if(localStorage.getItem("userName") === null){
    todoFrom.classList.add("hidden");
    todoList.classList.add("hidden");
} else {
    todoFrom.classList.remove("hidden");
    todoList.classList.remove("hidden");
}

//form input 내용을 submit(enter) 했을 때
todoFrom.addEventListener("submit", todoSubmit);

function todoSubmit(event) {
    event.preventDefault();
    const listCount = document.querySelector("#todo-list").childElementCount;
    if(listCount >= 10) {
        alert("You can fill our up to 10.");
        return;
    }

    const todo = document.querySelector("#todo-form input").value;
    addTodo(todo);
}

function addTodo(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = todo;
    button.innerText = "x";
    button.classList.add("y-btn");
    button.classList.add("y-btn-green");
    button.classList.add("ML20");

    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(li);

    document.querySelector("#todo-form input").value = "";

    // const todos = [];

    // const newTodoObj = {
    //     id: Date.now(),
    //     text: todo
    // };

    // todos.push(newTodoObj);
    
    // localStorage.setItem("todos", todos);

    // for(let i = 0; i < todos.length; i++){
    //     console.log("todos: "+ todos[i].id + ", " + todos[i].text);
    // }

    updateTodoList();
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    updateTodoList();
}

//localStorage에 todoList 저장하기
//브라우저 실행시마다 localStorage에 있는 todoList 불러오기
//todo 삭제 또는 todo 추가할 때마다 실행할 function
function updateTodoList() {
    const todos = [];

    const todoList = document.getElementById("todo-list");
    const todoListCount = todoList.childElementCount;
    const todoResult = document.querySelectorAll("#todo-list li span");

    for (let i = 0; i < todoListCount; i++) {
        todos.push(todoResult[i].innerText);
    }

    saveInStorage(JSON.stringify(todos));
}

function saveInStorage(todos) {
    localStorage.setItem("todos", todos);
}

showTodos();

function showTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    
    if(localStorage.getItem("todos") !== null){
        const parseTodos = JSON.parse(localStorage.getItem("todos"));
        parseTodos.forEach((item) => callSavedTodos(item));
    }
}

function callSavedTodos(item) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = item;
    button.innerText = "x";
    button.classList.add("y-btn");
    button.classList.add("y-btn-green");
    button.classList.add("ML20");
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}