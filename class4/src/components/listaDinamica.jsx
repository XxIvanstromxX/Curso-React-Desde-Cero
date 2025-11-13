const Lista = () => {
    const frutas = ["Manzana", "Banana", "Cereza"];

    return (
        <ul>
            {
                frutas.map((fruta, index) => (
                    <li key={fruta}>{fruta} Indice: {index}</li>
                ))
            }
        </ul>
    )
}

export default Lista;