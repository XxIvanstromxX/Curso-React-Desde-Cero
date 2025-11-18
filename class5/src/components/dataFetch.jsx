import { useEffect, useState } from "react";

const DataFetch = () => {
    const [mostrar, setMostrar] = useState(false);

    useEffect(()=>{
        // Realizar la petición fetch solo cuando 'mostrar' cambie
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => console.log(data.map(user => user)))
    }, [mostrar]);

    const buttonHandler = () => {
        setMostrar(!mostrar);
    }

    return (
        <div>
            <h2>Data Fetch Component</h2>
            <button onClick={buttonHandler}>
                {mostrar ? "Ocultar" : "Mostrar"} Datos en Consola
            </button>
        </div>
    )
}

export default DataFetch;