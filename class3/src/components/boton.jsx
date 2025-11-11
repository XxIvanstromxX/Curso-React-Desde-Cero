import { useState } from 'react'

const Boton = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button className='' onClick={incrementar}>agregar uno</button>
            <button onClick={decrementar}>quitar uno</button>
        </div>
    )
}

export default Boton;