import React from 'react';
import Card from './components/Card';
import img01 from "./img/img01.jpg";
import img02 from "./img/img02.jpg";
import img03 from "./img/img03.jpg";

function App() {
  return (
    <div>
      <h1>Componentes con React</h1>
      <div className="Cards-wrapper">
        <Card 
          imageSrc={img01}
          title="Título de la segunda tarjeta"
          description="Descripción de la segunda tarjeta."
        />
        <Card 
          imageSrc={img02}
          title="Título de la segunda tarjeta"
          description="Descripción de la segunda tarjeta."
        />
        <Card 
          imageSrc={img03}
          title="Título de la tercera tarjeta"
          description="Descripción de la tercera tarjeta."
        />
      </div>
    </div>
  );
}

export default App;