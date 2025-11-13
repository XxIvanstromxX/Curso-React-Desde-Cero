import { useState } from "react";

const CardX = ({userName, name, initialIsFollowing}) => {
    //Declaración del estado del componente
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const buttonAtributes = isFollowing ? "x-follow is-following" : "x-follow"
    const text = isFollowing ? "Siguiendo" : "Seguir"

    const handlerButton = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="x-follow-card">
            <header className="x-follow-card-header">
                <img 
                    src={`https://unavatar.io/x/${userName}`}
                    alt={userName}
                    className="x-img-user"
                />
                <div className="x-user-name">
                    <strong className="x-name">{name}</strong>
                    <span className="x-account">{userName}</span>
                </div>
            </header>
            <aside>
                <button 
                    className={buttonAtributes}
                    onClick={handlerButton}
                >
                    <span className="x-button-text">{text}</span>
                    <span className="unfollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}

export default CardX