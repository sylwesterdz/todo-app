let todos = [];
const submittodo = document.querySelector("#submittodo");
const todoList = document.querySelector(".todo-list");

submittodo.addEventListener('click', function(event){
    event.preventDefault();

    const todotext = document.querySelector("#todo").value;
    
    todos.push(todotext);
    document.querySelector("#todo").value = "";
    appendTodo(todotext);      
});

function appendTodo(text){
    todoList.innerHTML += 
        `<li class="list-element">
            <span>${text}</span> 
            <button class="todo-done">Done</button> 
            <button class="todo-delete">Delete</button> 
            <button class="todo-edit">Edit</button>
        </li>`;
    
    const todoDone = document.querySelectorAll(".todo-done");
    const listElement = document.querySelectorAll(".list-element");
    const todoDelete = document.querySelectorAll(".todo-delete");
    const todoEdit = document.querySelectorAll(".todo-edit");
    const popupOverlay = document.querySelector(".overlay");
    const popupClose = document.querySelector(".close");

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
    todoEdit.forEach((button) => {
        button.addEventListener('click', () => {
            popupOverlay.classList.add("active");
        });
    });
    popupClose.addEventListener('click', () => {
        popupOverlay.classList.remove("active");
    })
    popupOverlay.addEventListener('click', event => {
        if (event.target.classList.contains("overlay")) {
            popupOverlay.classList.remove("active");
        }
    })
};
