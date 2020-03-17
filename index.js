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
    const listElement = document.createElement("li");
    const todotext = document.createTextNode(text);
    
    listElement.appendChild(todotext);
    todoList.appendChild(listElement);
}
