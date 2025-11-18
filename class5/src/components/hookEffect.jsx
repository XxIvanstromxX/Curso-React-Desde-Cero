import { useEffect, useState } from "react"

export const HookEffect = () => {
    const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log("esto se ejecuta una sola vez al montar el componente")
  })

  const handleClick = () => {
    setContador(contador + 1)
  }

  return (
    <>
      <button onClick={handleClick}>
        Contador: {contador}
      </button>
    </>
  )
}