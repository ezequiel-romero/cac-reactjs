import { useState } from "react";
import MemeResultado from "./components/MemeResultado";
import MemeTexto from "./components/MemeTexto";
import MemeImagen from "./components/MemeImagen";
import html2canvas from "html2canvas"
import Footer from "./components/Footer";


function App() {
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');
  const [memeImg, setMemeImg] = useState(null);

  const handleDownload = () => {
    html2canvas(document.querySelector('#image')).then(function(canvas) {
      let a = document.createElement('a')
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream")
      a.download = 'meme.jpg'
      a.click()
    })
  }


  return (
    <>
      <main className="flex flex-col gap-10 text-center justify-center items-center w-full px-4 pt-16 pb-10 sm:px-8">
        <header>
          <h1 className="font-bold text-4xl mb-2 underline">Editor de memes</h1>
          <p className="max-w-md mb-4">Cree un meme para compartir en Facebook, Instagram, Stories, YouTube, Twitter u otras redes sociales.</p>
          <div className="group flex items-center justify-center gap-4 h-6">
            <img className="h-6 hidden group-hover:block" src="img/trollface.png" alt="" />
            <p>Por <a className="border-b border-dotted border-[#264653] hover:text-[#335f70]" href="https://ezequiel-romero.github.io/cac-reactjs/" target="_blank" rel="noreferrer">Ezequiel Romero</a></p>
            <img className="h-6 hidden group-hover:block" src="img/trollface.png" alt="" />
          </div>
        </header>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
          <MemeImagen memeImg={memeImg} setMemeImg={setMemeImg} />
          <MemeTexto setFirstText={setFirstText} setSecondText={setSecondText} />
          <MemeResultado firstText={firstText} secondText={secondText} memeImg={memeImg} />
        </section>
        <button className="py-2 px-4 bg-[#264653] text-white rounded-md border-2 hover:bg-gray-100 hover:text-[#264653] hover:border-[#264653]" onClick={handleDownload}>Descargar</button>
      </main>
      <Footer />
    </>
  );
}

export default App;
