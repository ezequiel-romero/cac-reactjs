export default function MemeTextoColor({setTextColor}) {

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value)
  }
  return (
    <div>
      <h3 className="mb-4 text-left">3. Seleccione el color de texto</h3>
      <div className="flex gap-3">
        <input type="radio" onChange={handleTextColorChange} id="blanco" name="textColor" value="text-white" defaultChecked className="w-8 h-8 appearance-none bg-white rounded m-0 border border-[#264653] cursor-pointer border-spacing-2 checked:border-4" />
        <input type="radio" onChange={handleTextColorChange} id="amarillo" name="textColor" value="text-yellow-400" className="w-8 h-8 appearance-none bg-yellow-400 rounded m-0 border border-[#264653] cursor-pointer border-spacing-2 checked:border-4" />
        <input type="radio" onChange={handleTextColorChange} id="rojo" name="textColor" value="text-red-600" className="w-8 h-8 appearance-none bg-red-600 rounded m-0 border border-[#264653] cursor-pointer border-spacing-2 checked:border-4" />
        <input type="radio" onChange={handleTextColorChange} id="negro" name="textColor" value="text-black" className="w-8 h-8 appearance-none bg-black rounded m-0 border border-[#264653] cursor-pointer border-spacing-2 checked:border-4" />
      </div>
    </div>
  )
}
