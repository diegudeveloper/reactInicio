import React from 'react';
import './Card.css';
import img01 from '../img/img01.jpg';


const Card = () => {
    return ( 
        <div className="Card-container">
            <img src={img01}></img>
            <h3>Agencia de Viaje - Maqueta</h3>
            <p>
            Proyecto web sobre Agencia donde podrás comprar boletos de avión, paquetes de estadias y reservas de hospedaje.
            </p>
            <div>
                <button>Ver Codigo</button>
                <button>Ver Demo</button>
            </div>
        </div>
    );
}
    
export default Card;