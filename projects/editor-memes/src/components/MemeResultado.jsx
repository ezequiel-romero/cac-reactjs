import memesImg from "./Memes";

export default function MemeResultado({ firstText, secondText, memeImg }) {
  return (
    <figure id="image" className="relative flex mx-auto aspect-square w-full h-auto max-w-[400px] border rounded-lg overflow-hidden text-2xl uppercase text-white font-bold shadow-lg sm:max-lg:col-span-2">
      {memeImg !== null ? 
        <img className="object-cover w-full h-full" src={`img/${memesImg[memeImg].src}`} alt="" /> :
        <img className="object-cover w-full h-full" src="img/placeholder-image.png" alt="" />
      }
      <div className="meme-text absolute top-1 left-0 right-0 p-1">
        {firstText}
      </div>
      <div className="meme-text absolute bottom-1 left-0 right-0 p-1">
        {secondText}
      </div>
    </figure>
  );
}
