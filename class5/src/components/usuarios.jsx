import { useEffect, useState } from "react";

const Usuarios = () => {
    // Estados necesarios de mi componente
    // loading, usuarios, error
    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/us")
            .then( res => {
                if(!res.ok){
                    throw new Error("Error al obtener los datos")
                }
                return res.json();
            })
            .then(data => setUsuarios(data))
            .catch(e => setError(e.message))
            .finally(() => setLoading(false))
    }, []);

    if(loading){
        return <p>Cargando Usuarios...</p>
    }
    if(error){
        return <p>Hubo un error {error}</p>
    }

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {usuarios.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Usuarios;