export default function MemeTextoTamano({textSize, setTextSize}) {

  const handleTextSizeChange = (e) => {
    setTextSize(e.target.value)
  }
  return (
    <div>
      <h3 className="mb-4 text-left">4. Seleccione el tamaño del texto</h3>
      <input type="range" name="textSize" id="textSize" onChange={handleTextSizeChange} min={10} max={60} step={1} value={textSize} className="w-full" />
    </div>
  )
}
