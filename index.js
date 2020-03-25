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
};
