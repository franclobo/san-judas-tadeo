import React from 'react';
import Logo from '../assets/images/Logo-SJT-BN.png';
import { SearchOutlined } from '@ant-design/icons';

const Navbar = () => {

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" style={{ width: "300px" }} />
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
