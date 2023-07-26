import React from "react";

const TextExample = () => (
  <section className="horarios">
    <div className="horarios__container">
      <div className="horarios__title">
        <h2 className="horarios-title">Horarios Misas</h2>
      </div>
      <div className="horarios__content">
        <p>
          <strong>Jueves a Sábado: </strong> 18:30
        </p>
        <p>
          <strong>Domingo: </strong> 8:30 y 17:00
        </p>
      </div>
    </div>
    <div className="horarios__container">
      <div className="horarios__title">
        <h2 className="horarios-title">Horarios Despacho Parroquial</h2>
      </div>
      <div className="horarios__content">
        <p>
          <strong>Miercoles a Sábado: </strong> 15:00 a 18:30
        </p>
      </div>
    </div>
  </section>
);
export default TextExample;
