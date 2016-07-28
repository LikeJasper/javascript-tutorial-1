const getNewTodoText = () => {
  const todoInput = document.getElementById("todo-input")
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

const clearTodoInput = () => {
  console.log("Clearing todo input")
}

const handleSubmit = (event) => {
  event.preventDefault()
  const text = getNewTodoText()
  addNewTodo(text)
  clearTodoInput()
}

window.onload = () => {
  const formElement = document.getElementById("form")
  formElement.addEventListener("submit", handleSubmit)
}
