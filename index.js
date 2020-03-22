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
    todoList.innerHTML += `<li class="list-element">${text} <button class="todo-done">Done</button> </li>`;
    
    const todoDone = document.querySelectorAll(".todo-done");
    const listElement = document.querySelectorAll(".list-element");

    todoDone.forEach((button, index) => {
        button.addEventListener('click', () => {
            listElement[index].classList.add("done");
        });
    });   
};
