import { useState } from "react";

const ConversorUnidades = () => {
    const [metros, setMetros] = useState('');
    const [pies, setPies] = useState('')
    const factorDeConversion = 3.28084; // 1 metro = 3.18084 pies
    //Convertir a pies = metros * factorDeConversion
    //Convertir a metros = metros / factorDeConversion

    const manejarCambioMetros = (e) => {
        const value = e.target.value;
        const n = Number(value);

        //Validar que la entrada sea un numero o este vacia
        // isNaN devuelve true si no es un numero
        // !isNaN devuelve true si es un numero
        if(!isNaN(n) || value === ""){
            setMetros(n)
            const calculoMetrosAPies = n * factorDeConversion; //Esto es un Numero
            setPies(String(calculoMetrosAPies));
        }
    }

    const manejarCambioPies = (e) => {
        const value = e.target.value;
        const n = Number(value);

        //Validar que la entrada sea un numero o este vacia
        // isNaN devuelve true si no es un numero
        // !isNaN devuelve true si es un numero
        if(!isNaN(n) || value === ""){
            setPies(n)
            const calculoPiesAMetros = n / factorDeConversion; //Esto es un Numero
            setMetros(String(calculoPiesAMetros));
        }
    }

    return (
        <div>
            <h3>Introduce el valor a convertir</h3>
            <p>Conversión bidireccional</p>
            <input 
                type="text" 
                value={metros} 
                placeholder="Escribe en metros"
                onChange={e => manejarCambioMetros(e)}
            />
            <input 
                type="text"
                value={pies}
                placeholder="Escribe en Pies"
                onChange={e => manejarCambioPies(e)}
            />
        </div>
    )
}

export default ConversorUnidades;