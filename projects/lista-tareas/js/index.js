const input = document.querySelector('input')
const addButton = document.querySelector('.btn-add')
const empty = document.querySelector('.empty')
const priority = document.querySelector('#priority')
const prioritiesContainer = document.querySelector('.priorities-container')
const highPriorityList = document.querySelector('.high-priority-list')
const mediumPriorityList = document.querySelector('.medium-priority-list')
const lowPriorityList = document.querySelector('.low-priority-list')
const noPriorityList = document.querySelector('.no-priority-list')

addButton.addEventListener('click', (e) => {
  e.preventDefault()

  const taskName = input.value

  if (taskName !== '') {
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.textContent = taskName

    li.appendChild(p)
    li.appendChild(addDeleteButton(priority.value))

    if (priority.value === 'high') {
      highPriorityList.appendChild(li)
    } else if (priority.value === 'medium') {
      mediumPriorityList.appendChild(li)
    } else if (priority.value === 'low') {
      lowPriorityList.appendChild(li)
    } else {
      noPriorityList.appendChild(li)
    }

    input.value = ''
    priority.value = ''
    empty.style.display = 'none'
    prioritiesContainer.style.display = 'grid'
  }
})

const addDeleteButton = (priority) => {
  const delBtn = document.createElement('button')
  delBtn.textContent = 'x'
  delBtn.addEventListener('click', (e) => {
    const itemToRemove = e.target.parentElement

    if (priority === 'high') {
      highPriorityList.removeChild(itemToRemove)
    } else if (priority === 'medium') {
      mediumPriorityList.removeChild(itemToRemove)
    } else if (priority === 'low') {
      lowPriorityList.removeChild(itemToRemove)
    } else {
      noPriorityList.removeChild(itemToRemove)
    }

    const taskAmount = noPriorityList.childElementCount + lowPriorityList.childElementCount + mediumPriorityList.childElementCount + highPriorityList.childElementCount
    if (taskAmount === 0) {
      empty.style.display = 'block'
      prioritiesContainer.style.display = 'none'
    }
  })
  return delBtn
}
