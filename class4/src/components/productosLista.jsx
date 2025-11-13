import { useState } from "react";
import style from "./product.module.css"

const ProductList = () => {
    const [mostrar, setMostrar] = useState(true)

    const productos = [
        {id: 1, nombre: "Laptop", precio: 15000},
        {id: 2, nombre: "Mouse", precio: 300},
        {id: 3, nombre: "Telefono", precio: 800}
    ]

    return (
        <section className={style["contenedor"]}>
            <h1>Lista de productos</h1>
            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? "Ocultar" : "Mostrar"}
            </button>

            {
                mostrar && (
                    <ul>
                        {productos.map((producto) => (
                            <li key={producto.id}>{producto.nombre} - ${producto.precio}</li>    
                        ))}
                    </ul>
                )
            }
        </section>
    )
}

export default ProductList;