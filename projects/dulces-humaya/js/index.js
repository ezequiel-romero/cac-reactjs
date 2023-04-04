
const menuButton = document.querySelector('.menu-button')
const menuDropdown = document.querySelector('.menu-dropdown')
const mobileMenuLink = document.querySelectorAll('.mobileMenuLink')

menuButton.addEventListener('click', openCloseMenu)

for (let i = 0; i < mobileMenuLink.length; i++) {
  mobileMenuLink[i].addEventListener('click', openCloseMenu)
}

function openCloseMenu () {
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
