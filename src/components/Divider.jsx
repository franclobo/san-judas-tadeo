import React from 'react';
import { Divider } from "antd";

const DividerSection = () => {
  return (
    <section className="noticias">
      <Divider orientation="left">
        <h3 className="noticias__title">Noticias Recientes</h3>
      </Divider>
      <ul className="noticias__list">
        <li className="noticias__item item_1">
          <a
            href="https://www.facebook.com/parroquiasanfranciscodesales/posts/10158997691377954"
            target="_blank"
            rel="noopener noreferrer"
            className="noticias__link"
          >
            <p className="noticias__txt">Homilias</p>
          </a>
        </li>
        <li className="noticias__item item_2">
          <a
            href="https://www.facebook.com/parroquiasanfranciscodesales/posts/10158997691377954"
            target="_blank"
            rel="noopener noreferrer"
            className="noticias__link"
          >
            <p className="noticias__txt">Lecturas</p>
          </a>
        </li>
        <li className="noticias__item item_3">
          <a
            href="https://www.facebook.com/parroquiasanfranciscodesales/posts/10158997691377954"
            target="_blank"
            rel="noopener noreferrer"
            className="noticias__link"
          >
            <p className="noticias__txt">Avisos <br /> parroquiales</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default DividerSection;
