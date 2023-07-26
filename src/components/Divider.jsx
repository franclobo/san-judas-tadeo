import React from 'react';
import { Divider } from "antd";

const DividerSection = () => {
  return (
    <section className="noticias">
      <Divider orientation="left">
        <h3 className="noticias__title">Noticias Recientes</h3>
      </Divider>
      <ul className="noticias__list">
        <li className="noticias__item">
          <a href="https://www.facebook.com/parroquiasanfranciscodesales/posts/10158997691377954" target="_blank" rel="noopener noreferrer" className="noticias__link">
            <p className="noticias__txt">
              Lorem Ipsum
            </p>
          </a>
        </li>
        <li className="noticias__item">
          <a href="https://www.facebook.com/parroquiasanfranciscodesales/posts/10158997691377954" target="_blank" rel="noopener noreferrer" className="noticias__link">
            <p className="noticias__txt">
              Lorem Ipsum
            </p>
          </a>
        </li>
        <li className="noticias__item">
          <a href="https://www.facebook.com/parroquiasanfranciscodesales/posts/10158997691377954" target="_blank" rel="noopener noreferrer" className="noticias__link">
            <p className="noticias__txt">
              Lorem Ipsum
            </p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default DividerSection;
