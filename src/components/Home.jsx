import React from 'react';
import UncontrolledExample from './Carousell.jsx';

function Home() {
  return (
    <div>
      <UncontrolledExample />
      <section className="info">
        <article className="info__article">
          <h2 className="info__title">Misas Dominicales</h2>
          <table className="table table-striped table-bordered table-hover">
            <thead className="info__thead">
              <tr>
                <th></th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sábado</th>
                <th>Domingo</th>
              </tr>
            </thead>
            <tbody className="info__tbody">
              <tr>
                <td>Parroquia San Judas Tadeo</td>
                <td>18:30</td>
                <td>18:30</td>
                <td>18:30</td>
                <td>08:30 y 17:00</td>
              </tr>
              <tr>
                <td>Capilla San Francisco Javier</td>
                <td></td>
                <td></td>
                <td>19:00</td>
                <td>07:00</td>
              </tr>
              <tr>
                <td>Capilla San José de Cangahua</td>
                <td></td>
                <td></td>
                <td></td>
                <td>07:00</td>
              </tr>
              <tr>
                <td>Capilla San Antonio de Padua</td>
                <td></td>
                <td></td>
                <td></td>
                <td>12:00</td>
              </tr>
              <tr>
                <td>Capilla La Hacienda</td>
                <td></td>
                <td></td>
                <td>09:00</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </article>
        <article className="info__article">
          <h2 className="info__title">Servicios Religiosos</h2>
          <ul>
            <li>
              <strong>Confesiones: </strong>Jueves y Viernes 18:00
            </li>
            <li>
              <strong>Bautizos: </strong>Sábados 18:30
            </li>
            <li>
              <strong>Adoración al Santísimo: </strong>Jueves 18:00
            </li>
            <li>
              <strong>Curso Pre-bautismal: </strong>1er y 3er miércoles del mes
              19:00
            </li>
            <li>
              <strong>Curso de preparación para el matrimonio: </strong>2do
              domingo cada dos meses
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Home
