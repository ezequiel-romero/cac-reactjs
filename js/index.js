const projects = document.querySelector('.projects')

const projectList = [
  {
    title: 'Monorepo GitHub',
    src: './images/monorepo.jpg',
    repo: 'https://github.com/ezequiel-romero/cac-reactjs',
    href: ''
  },
  {
    title: 'ID card web',
    src: './images/id_card_web.jpg',
    repo: 'https://github.com/ezequiel-romero/cac-reactjs/tree/main/projects/id-card-web',
    href: '/cac-reactjs/projects/id-card-web'
  },
  {
    title: 'Lista de tareas',
    src: './images/lista-de-tareas.jpg',
    repo: 'https://github.com/ezequiel-romero/cac-reactjs/tree/main/projects/lista-tareas',
    href: '/cac-reactjs/projects/lista-tareas'
  },
  {
    title: 'Dulces Humaya',
    src: './images/dulces-humaya.jpg',
    repo: 'https://github.com/ezequiel-romero/cac-reactjs/tree/main/projects/dulces-humaya',
    href: '/cac-reactjs/projects/dulces-humaya'
  },
  {
    title: 'Editor de Memes',
    src: './images/editor-memes.jpg',
    repo: 'https://github.com/ezequiel-romero/cac-reactjs/tree/main/projects/editor-memes',
    href: '/cac-reactjs/projects/editor-memes/build/'
  }
]

for (let i = 0; i < projectList.length; i++) {
  projects.innerHTML += `
        <li class="bg-white bg-opacity-90 text-center p-4 border rounded-lg hover:border-purple-700">
          <h3>${projectList[i].title}</h3>
          <a href="${projectList[i].href}" target="_blank"><img class="mt-4 mx-auto rounded-lg" src="${projectList[i].src}" alt="" /></a>
          <div class="flex gap-4 mt-4 justify-center">
            <a href="${projectList[i].repo}" target="_blank"><i class="fa-brands fa-github hover:text-purple-700"></i></a>
            <a href="${projectList[i].href}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square hover:text-purple-700"></i></a>
          </div>
        </li>
  `
}
