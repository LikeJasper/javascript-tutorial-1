const addNewTodo = () => {
  const todoListElement = document.getElementById("todo-list")
  todoListElement.appendChild()
}

const handleSubmit = (event) => {
  event.preventDefault()
  addNewTodo()
}

window.onload = () => {
  const formElement = document.getElementById("form")
  formElement.addEventListener("submit", handleSubmit)
}
