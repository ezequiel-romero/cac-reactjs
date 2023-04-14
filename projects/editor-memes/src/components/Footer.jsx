export default function Footer() {
  return (
    <footer className="group fixed top-0 w-full text-center text-sm py-2 px-8 flex justify-end items-center gap-3 bg-slate-50 shadow-lg">
      <img className="h-4 hidden group-hover:block" src="img/trollface.png" alt="" />
      <span>Por <a href="https://ezequiel-romero.github.io/cac-reactjs/">Ezequiel Romero</a></span>
      <a href="https://github.com/ezequiel-romero" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/cesar-ezequiel-romero/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
      <a href="mailto:eze.1003@gmail.com" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope"></i></a>
    </footer>
  )
}
