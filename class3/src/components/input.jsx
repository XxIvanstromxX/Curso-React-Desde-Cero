import { useState } from "react";

const Entrada = () => {
    const [texto, setTexto] = useState('');

    return (
        <div>
            <h2>Escribeme algo:</h2>
            <input 
                type="text" 
                valor={texto} 
                onChange={(e)=>{
                    setTexto(e.target.value)
                }}/>
            <p>El texto es: {texto}</p>
        </div>
    )
}

export default Entrada;