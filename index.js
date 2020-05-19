let todos = [];
const submittodo = document.querySelector("#submittodo");
const todoList = document.querySelector(".todo-list");
const popupOverlay = document.querySelector(".overlay");
const popupClose = document.querySelector(".close");
const popupBar = document.querySelector("#editbar");
const popupAccept = document.querySelector(".accept");
const popupCancel = document.querySelector(".cancel");
let currentTodoIndex
let currentTodoText

submittodo.addEventListener('click', function(event){
    event.preventDefault();

    let todotext = document.querySelector("#todo").value;
    
    todos.push(todotext);
    document.querySelector("#todo").value = "";
    appendTodo(todotext);      
});

function appendTodo(text){
    todoList.innerHTML += 
        `<li class="list-element">
            <span class="todo-text">${text}</span> 
            <button class="todo-done">Done</button> 
            <button class="todo-delete">Delete</button> 
            <button class="todo-edit">Edit</button>
        </li>`;
    
    const todoDone = document.querySelectorAll(".todo-done");
    const listElement = document.querySelectorAll(".list-element");
    const todoText = document.querySelectorAll(".todo-text");
    const todoDelete = document.querySelectorAll(".todo-delete");
    const todoEdit = document.querySelectorAll(".todo-edit");
    
    todoDone.forEach((button, index) => {
        button.addEventListener('click', () => {
            listElement[index].classList.add("done");
        });
    });
    todoDelete.forEach((button, index) => {
        button.addEventListener('click', () => {
            listElement[index].remove();
        });
    });
    todoEdit.forEach((button, index) => {
        button.addEventListener('click', () => {
            popupOverlay.classList.add("active");
            popupBar.value = todoText[index].innerHTML;
            currentTodoIndex = index;
        });
    });
};

popupClose.addEventListener('click', () => {
    popupOverlay.classList.remove("active");
});
popupOverlay.addEventListener('click', event => {
    if (event.target.classList.contains("overlay")) {
        popupOverlay.classList.remove("active");
    };
});
popupCancel.addEventListener('click', () => {
    popupOverlay.classList.remove("active");
});
popupAccept.addEventListener('click', () => {
    editTodo(currentTodoIndex, popupBar.value)
    popupOverlay.classList.remove("active");
});

function editTodo(index, text) {
    const todoText = document.querySelectorAll(".todo-text");
    
    todoText[index].innerHTML = text;
}