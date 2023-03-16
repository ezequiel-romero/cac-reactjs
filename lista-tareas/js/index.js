const input = document.querySelector('input')
const addButton = document.querySelector('.btn-add')
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty')
const priority = document.querySelector('#priority')

addButton.addEventListener('click', (e) => {
  e.preventDefault()

  const taskName = input.value

  if (taskName !== '') {
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.textContent = taskName

    if (priority.value === 'high') {
      p.classList.add('high')
    } else if (priority.value === 'medium') {
      p.classList.add('medium')
    } else if (priority.value === 'low') {
      p.classList.add('low')
    }

    li.appendChild(p)
    li.appendChild(addDeleteButton())
    ul.appendChild(li)

    input.value = ''
    priority.value = ''
    empty.style.display = 'none'
  }
})

const addDeleteButton = () => {
  const delBtn = document.createElement('button')
  delBtn.textContent = 'x'
  delBtn.addEventListener('click', (e) => {
    const itemToRemove = e.target.parentElement
    ul.removeChild(itemToRemove)

    if (ul.childElementCount === 0) {
      empty.style.display = 'block'
    }
  })
  return delBtn
}
