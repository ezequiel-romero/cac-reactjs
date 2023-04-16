export default function MemeTexto({ setFirstText, setSecondText }) {
  const handleFirstText = (e) => {
    setFirstText(e.target.value)
  }
  const handleSecondText = (e) => {
    setSecondText(e.target.value)
  }
  return (
    <div>
      <h3 className="mb-4 text-left">2. Seleccione el texto a mostrar</h3>
      <div className="mb-4">
        <input className="w-full rounded-md text-black border border-[#264653] py-1 px-2 focus-visible:outline-purple-900" type="text" name="texto-1" onChange={handleFirstText} placeholder="Texto de arriba" />
      </div>
      <div className="mb-4">
        <input className="w-full rounded-md text-black border border-[#264653] py-1 px-2 focus-visible:outline-purple-900" type="text" name="texto-1" onChange={handleSecondText} placeholder="Texto de abajo" />
      </div>
    </div>
  )
}