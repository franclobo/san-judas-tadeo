import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from "antd";

const DividerSection = () => {
  return (
    <section className="noticias">
      <Divider orientation="left">
        <h3 className="noticias__title">Noticias Recientes</h3>
      </Divider>
      <ul className="noticias__list">
        <li className="noticias__item item_1">
          <Link
            to="/homilias"
            className="noticias__link"
          >
            <p className="noticias__txt">Homilias</p>
          </Link>
        </li>
        <li className="noticias__item item_2">
          <Link
            to="/textos"
            className="noticias__link"
          >
            <p className="noticias__txt">Lecturas</p>
          </Link>
        </li>
        <li className="noticias__item item_3">
          <Link
            to="/actividades"
            className="noticias__link"
          >
            <p className="noticias__txt">Avisos <br /> parroquiales</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default DividerSection;
