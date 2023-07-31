import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import CatequesisFoto from '../assets/images/catequesis.jpg';
import Iniciacion from '../assets/images/iniciacion.webp';
import PrimeroDeComunion from '../assets/images/primero-de-comunion.webp';
import SegundoDeComunion from '../assets/images/segundo-de-comunion.webp';
import AnioBiblico from '../assets/images/anio-biblico.webp';
import PrimeroDeConfirmacion from '../assets/images/primero-de-confirmacion.webp';
import SegundoDeConfirmacion from '../assets/images/segundo-de-confirmacion.webp';

function Catequesis() {
  return (
    <div>
      <img
        src={CatequesisFoto}
        alt="Catequesis"
        style={{ width: "100%", height: "500px", marginBottom: "20px" }}
      />
      <Accordion defaultActiveKey="0" className="accordion">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Iniciación</Accordion.Header>
          <Accordion.Body className="body">
            <div className="image-book">
              <a
                href="https://drive.google.com/file/d/1-b6AU77UYpBF9mOMyOJ4zh7Bvncw6Yws/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <img src={Iniciacion} alt="iniciacion" className="book" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Reconciliación</Accordion.Header>
          <Accordion.Body className="body">
            <div className="image-book">
              <a
                href="https://drive.google.com/file/d/162scpgPi5GqQmhLfQbqby2yUmb4gxd1Q/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <img
                  src={PrimeroDeComunion}
                  alt="iniciacion"
                  className="book"
                />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Ecucaristía</Accordion.Header>
          <Accordion.Body className="body">
            <div className="image-book">
              <a
                href="https://drive.google.com/file/d/1TNgYAzj6hj22N2GrFhglxu0V4LSV9JH4/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <img
                  src={SegundoDeComunion}
                  alt="iniciacion"
                  className="book"
                />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Año Bíblico</Accordion.Header>
          <Accordion.Body className="body">
            <div className="image-book">
              <a
                href="https://drive.google.com/file/d/1IArt146IvuKf3zag7UQd03UY50RhXocn/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <img src={AnioBiblico} alt="iniciacion" className="book" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Primero de Confirmacion</Accordion.Header>
          <Accordion.Body className="body">
            <div className="image-book">
              <a
                href="https://drive.google.com/file/d/1nRWsH6Z9GOiTIgE-95_o1_4fE9gkBz59/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <img
                  src={PrimeroDeConfirmacion}
                  alt="iniciacion"
                  className="book"
                />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Segundo de Confirmación</Accordion.Header>
          <Accordion.Body className="body">
            <div className="image-book">
              <a
                href="https://drive.google.com/file/d/1EpDg_fE3E4AgMg20jeKi8MhQwLvT8A_-/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <img
                  src={SegundoDeConfirmacion}
                  alt="iniciacion"
                  className="book"
                />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Grupo de Jóvenes</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Grupo adultos</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Catequesis
