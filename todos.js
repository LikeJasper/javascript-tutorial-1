const createNewTodoItemElement = () => {
  console.log("Creating new todo item element")
}

const addNewTodo = () => {
  const todoListElement = document.getElementById("todo-list")
  const newTodoItemElement = createNewTodoItemElement()
  todoListElement.appendChild(newTodoItemElement)
}

const handleSubmit = (event) => {
  event.preventDefault()
  addNewTodo()
}

window.onload = () => {
  const formElement = document.getElementById("form")
  formElement.addEventListener("submit", handleSubmit)
}
