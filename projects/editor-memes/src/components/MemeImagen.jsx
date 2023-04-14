import memesImg from "./Memes"

export default function MemeImagen({memeImg, setMemeImg}) {

  const handleImageChange = (imgId) => {
    setMemeImg(imgId)
  }
  return (
    <div>
      <h3 className="mb-4">1. Seleccione la imagen que quiere usar</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(48px,1fr))] gap-2">
        {
          memesImg.map(meme => (
            <div key={meme.id} onClick={() => handleImageChange(meme.id)} className="w-12 h-12 outline outline-gray-100 hover:outline-[#264653] rounded p-0 overflow-hidden cursor-pointer">
              <img className="object-cover w-full h-full" src={`img/${meme.src}`} alt={meme.name} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
