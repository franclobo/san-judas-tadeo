import React from 'react';
import Misa from '../assets/images/misa.jpg';

function Horarios() {
  return (
    <div>
      <img src={Misa} alt="Misa" style={{ width: '100%', height: '500px', marginBottom: '20px' }} />
      <article className="info__article">
        <h2 className="info__title">Horario de Misas</h2>
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
    </div>
  );
}

export default Horarios
