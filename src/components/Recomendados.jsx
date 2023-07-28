import React from "react";
import { Divider } from "antd";
import CEI from "../assets/icons/CEI.png";
import SantaSede from "../assets/icons/Santa Sede.png";

const Recomendados = () => {
  return (
    <section className="noticias">
      <Divider orientation="left">
        <h3 className="noticias__title">Recomendados</h3>
      </Divider>
      <ul className="recomendados__list">
        <li className="recomendados__item item_1">
          <a
            href="https://www.vatican.va/content/vatican/es.html"
            target="_blank"
            rel="noopener noreferrer"
            className="recomendados__link"
          >
            <img
              src={SantaSede}
              alt="Vaticano"
              className="recomendados__img"
            />
          </a>
        </li>
        <li className="recomendados__item item_2">
          <a
            href="https://www.arquidiocesisdequito.com.ec/"
            target="_blank"
            rel="noopener noreferrer"
            className="recomendados__link"
          >
            <img
              src="https://www.arquidiocesisdequito.com.ec/templates/yootheme/cache/logo-arquidiocisis-1e755d86.webp"
              alt="Arquidiósesis de Quito"
              className="recomendados__img"
            />
          </a>
        </li>
        <li className="recomendados__item item_3">
          <a
            href="https://www.iec2024.ec/"
            target="_blank"
            rel="noopener noreferrer"
            className="recomendados__link"
          >
            <img src={CEI} alt="CEI" className="recomendados__img" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Recomendados;
