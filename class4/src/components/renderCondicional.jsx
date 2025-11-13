import { useState } from "react";
import style from "./product.module.css"

const RenderCondicional = () => {
    const [mostrar, setMostrar] = useState(true);

    return (
        <div>
            <button onClick={() => {setMostrar(!mostrar)}}>
                {mostrar ? "Ocultar" : "Mostrar"}
            </button>

            {
                mostrar && <p>¡Hola, soy un mensaje condicional!</p>
            }
        </div>
    )
}

export default RenderCondicional;


// Operador NOT "!" -> Negar o invertir el valor inicial
// !true => false || !false => true
// mostrar = true => false

// Operador AND && -> La condicion siempre se tiene que cumplir con los valores true
// (trocoAncho && frondoso) = poder construir 