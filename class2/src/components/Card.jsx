import styles from "./Card.module.css"

const Card = ({titulo, descripcion, imagen}) => {
    return (
        <div className={styles["card"]}>
            <img src={imagen} alt={titulo} className={styles["imagen"]}/>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    )
}

export default Card