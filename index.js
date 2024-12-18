const input = document.querySelector('.input')
const todoList = document.querySelector('.todo-list')
const addBtn = document.querySelector('.add-btn')

function addTodo() {
  console.log(input.value)
  if (input.value === '') return

  const todo = document.createElement('li')
  // todo.textContent = input.value
  todo.innerHTML = `
  <input type="checkbox" class="isChecked">
  <label class="label">${input.value}</label>
  <button class="delete-btn">🗑️</button>
  `

  const deleteBtn = todo.querySelector('.delete-btn')
  const isChecked = todo.querySelector('.isChecked')

  //delete
  deleteBtn.addEventListener('click', function () {
    todo.remove()
  })

  //checked
  isChecked.addEventListener('change', function () {
    if (isChecked.checked) {
      todo.style.textDecoration = 'line-through'
      todo.style.color = '#999'
      todoList.append(todo)
    } else {
      todo.style.textDecoration = 'none'
      todo.style.color = ''
      todoList.prepend(todo)
    }
  })

  todoList.append(todo)
  input.value = ''
}

addBtn.addEventListener('click', addTodo)

input.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    console.log(input.value)
    addTodo()
  }
})
