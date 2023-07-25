import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/Logo-SJT-BN.png';
import { SearchOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxScroll = 200; // Ajusta este valor para cambiar la cantidad de desplazamiento antes de que la barra alcance su tamaño mínimo
  const navHeight = Math.max(
    100.5,
    183 - (scrollY > maxScroll ? maxScroll : scrollY) / 2
  ); // La altura de la barra disminuye hasta un mínimo de 100.5px o la mitad de maxScroll
  const logoSize = Math.max(
    100,
    200 - (scrollY > maxScroll ? maxScroll : scrollY) / 2
  ); // El tamaño de la imagen disminuye hasta un mínimo de 150px o la mitad de maxScroll
  const opacity = Math.min(1, 0.7 + scrollY / maxScroll); // Cambio de opacidad de 0.7 a 1 a medida que se desplaza hacia abajo

  return (
    <header
      className="header"
      style={{ height: `${navHeight}px`, opacity: opacity }}
    >
      <div className="logo">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
        />
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Grupos
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              Sacramentos
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Recursos
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Galería
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Donaciones
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contáctanos
            </a>
          </li>
          <li>
            <SearchOutlined />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
