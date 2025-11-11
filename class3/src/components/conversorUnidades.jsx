import { useState } from "react";

const ConversorUnidades = () => {
    const [metros, setMetros] = useState('');
    const [pies, setPies] = useState('')
    const factorDeConversion = 3.28084; // 1 metro = 3.18084 pies
    //Formula = metros * factorDeConversion;
    let calculoMetrosAPies = 0;

    const manejarCambioMetros = (e) => {
        const value = e.target.value;
        const n = Number(value);

        //Validar que la entrada sea un numero o este vacia
        if(!isNaN(n) || value === ""){
            setMetros(n)
            calculoMetrosAPies = n * factorDeConversion; //Numero
            setPies(String(calculoMetrosAPies));
        }
    }

    const manejarCambioPies = (e) => {
        const value = e.target.value;
        const n = Number(value);

        //Validar que la entrada sea un numero o este vacia
        if(!isNaN(n) || value === ""){
            setPies(n)
            const calculoPiesAMetros = n / factorDeConversion; //Numero
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
            <p>El valor convertido a pies es: {calculoMetrosAPies}</p>
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