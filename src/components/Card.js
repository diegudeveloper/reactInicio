import React from 'react';
import './Card.css';

const Card = ({ imageSrc, title, description }) => {
    return ( 
        <div className="Card-container">
            <img src={imageSrc} alt="Imagen de la tarjeta"></img>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="Containerbuttons">
                <button>Ver Codigo</button>
                <button>Ver Demo</button>
            </div>
        </div>
    );
}
    
export default Card;
