import React from 'react';
import { Link } from 'react-router-dom';
import UncontrolledExample from './Carousell.jsx';
import Horario from '../assets/icons/horario.png';
import Servicios from '../assets/icons/servicios-religiosos.png';

function Home() {
  return (
    <div>
      <UncontrolledExample />
      <section className="info">
        <ul className="icons">
          <li className="icons__item">
            <Link to="/horarios" className="icons__link">
              <img src={Horario} alt="Horario" className="icons__img" />
              <p className='icons__txt'>Horarios</p>
            </Link>
          </li>
          <li className="icons__item">
            <Link to="/servicios" className="icons__link">
              <img src={Servicios} alt="Servicios Religiosos" className="icons__img" />
              <p className='icons__txt'>Servicios Religiosos</p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home
