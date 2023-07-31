import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import CatequesisFoto from '../assets/images/catequesis.jpg';
import Iniciacion from '../assets/images/iniciacion.webp';
import IniciacionBook from '../assets/libros/Iniciacion.pdf';
import PrimeroDeComunion from '../assets/images/primero-de-comunion.webp';
import Reconcialiacion from '../assets/libros/reconciliacion.pdf';
import SegundoDeComunion from '../assets/images/segundo-de-comunion.webp';
import Comunion from '../assets/libros/comunion.pdf';
import AnioBiblico from '../assets/images/anio-biblico.webp';
import AnioBiblicoBook from '../assets/libros/anio-biblico.pdf';
import PrimeroDeConfirmacion from '../assets/images/primero-de-confirmacion.webp';
import PrimeroDeConfirmacionBook from '../assets/libros/primero-de-confirmacion.pdf';
import SegundoDeConfirmacion from '../assets/images/segundo-de-confirmacion.webp';
import SegundoDeConfirmacionBook from '../assets/libros/segundo-de-confirmacion.pdf';

function Catequesis() {
  return (
    <div>
      <img
        src={CatequesisFoto}
        alt="Catequesis"
        style={{ width: "100%", height: "500px", marginBottom: "20px" }}
      />
      <Accordion defaultActiveKey="0" className='accordion'>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Iniciación</Accordion.Header>
          <Accordion.Body className="body">
            <div className="image-book">
              <a
                href={IniciacionBook}
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
                href={Reconcialiacion}
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
                href={Comunion}
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
                href={AnioBiblicoBook}
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
                href={PrimeroDeConfirmacionBook}
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
                href={SegundoDeConfirmacionBook}
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
