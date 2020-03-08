let todos = []

const submittodo = document.getElementById("submittodo");

submittodo.addEventListener('click', function(event){
    event.preventDefault();
    const todotext = document.getElementById("todo").value;
    todos.push(todotext)
    document.getElementById("todo").value = ""
    console.log(todos);
})
