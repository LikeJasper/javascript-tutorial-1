const getNewTodoText = () => {
  const todoInput = document.getElementById("todo-input")
  return todoInput.value
}

const createCheckboxElement = () => {
  const checkboxElement = document.createElement("input")
  checkboxElement.setAttribute("type", "checkbox")
  return checkboxElement
}

const createTextElement = () => {
  const textElement = document.createElement("span")
  return textElement
}

const createNewTodoItemElement = text => {
  const newTodoItemElement = document.createElement("li")
  const checkboxElement = createCheckboxElement()
  const textElement = createTextElement()

  newTodoItemElement.appendChild(checkboxElement)
  newTodoItemElement.appendChild(textElement)
  return newTodoItemElement
}

const addNewTodo = text => {
  const todoListElement = document.getElementById("todo-list")
  const newTodoItemElement = createNewTodoItemElement(text)
  todoListElement.appendChild(newTodoItemElement)
}

const clearTodoInput = () => {
  const todoInput = document.getElementById("todo-input")
  todoInput.value = ""
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
