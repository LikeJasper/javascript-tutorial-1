const getNewTodoText = () => {
  return todoInput.value
}

const createNewTodoItemElement = text => {
  const newTodoItemElement = document.createElement("li")
  newTodoItemElement.innerText = text
  return newTodoItemElement
}

const addNewTodo = text => {
  const todoListElement = document.getElementById("todo-list")
  const newTodoItemElement = createNewTodoItemElement(text)
  todoListElement.appendChild(newTodoItemElement)
}

const handleSubmit = (event) => {
  event.preventDefault()
  const text = getNewTodoText()
  addNewTodo(text)
}

window.onload = () => {
  const formElement = document.getElementById("form")
  formElement.addEventListener("submit", handleSubmit)
}
