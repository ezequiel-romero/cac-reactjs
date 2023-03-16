
const menuButton = document.querySelector('.menu-button')
const menuDropdown = document.querySelector('.menu-dropdown')

menuButton.addEventListener('click', openMenu)

function openMenu () {
  if (menuDropdown.classList.contains('hidden')) {
    menuDropdown.classList.remove('hidden')
    menuButton.children[1].classList.add('hidden')
    menuButton.children[2].classList.remove('hidden')
  } else {
    menuDropdown.classList.add('hidden')
    menuButton.children[1].classList.remove('hidden')
    menuButton.children[2].classList.add('hidden')
  }
}
