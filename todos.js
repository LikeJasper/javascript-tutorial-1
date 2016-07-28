const handleSubmit = (event) => {
  event.preventDefault()
  console.log('Handling submit')
}

window.onload = () => {
  const formElement = document.getElementById("form")
  formElement.addEventListener("submit", handleSubmit)
}
