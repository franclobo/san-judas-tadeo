import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/SJT-BN.png';
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
    90,
    80 - (scrollY > maxScroll ? maxScroll : scrollY) / 2
  ); // La altura de la barra disminuye hasta un mínimo de 100.5px o la mitad de maxScroll
  const logoSize = Math.max(
    70,
    80 - (scrollY > maxScroll ? maxScroll : scrollY) / 2
  ); // El tamaño de la imagen disminuye hasta un mínimo de 150px o la mitad de maxScroll
  const opacity = Math.min(1, 0.7 + scrollY / maxScroll); // Cambio de opacidad de 0.7 a 1 a medida que se desplaza hacia abajo

  // Add state to keep track of the hover state for each menu item
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    conocenos: false,
    groups: false,
    sacramentos: false,
    servicios: false,
    recursos: false,
    galeria: false,
    donaciones: false,
    contactanos: false,
  });

  // Function to handle hover events
  const handleHover = (item, isHovering) => {
    setIsDropdownOpen((prevState) => ({ ...prevState, [item]: isHovering }));
  };

  return (
    <header
      className="header"
      style={{ height: `${navHeight}px`, opacity: opacity }}
    >
      <div className="logo">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: `250px`, height: `${logoSize}px` }}
          />
        </Link>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li
            className="nav-item"
            onMouseEnter={() => handleHover("conocenos", true)}
            onMouseLeave={() => handleHover("conocenos", false)}
          >
            <a href="#home" className="nav-link underline-link">
              Conocenos
            </a>
            {isDropdownOpen.conocenos && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Historia
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Nuestro párroco
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Ambientes del templo
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Asociaciones
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Imagen de Nuestra Señora de la Misericordia
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleHover("groups", true)}
            onMouseLeave={() => handleHover("groups", false)}
          >
            <a href="#home" className="nav-link underline-link">
              Grupos
            </a>
            {isDropdownOpen.groups && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Niños
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Jóvenes
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Adultos y Familias
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleHover("sacramentos", true)}
            onMouseLeave={() => handleHover("sacramentos", false)}
          >
            <a href="#about" className="nav-link underline-link">
              Sacramentos
            </a>
            {isDropdownOpen.sacramentos && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Bautismo
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Reconciliación
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Eucaristia
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Confirmación
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Matrimonio
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleHover("servicios", true)}
            onMouseLeave={() => handleHover("servicios", false)}
          >
            <a href="#services" className="nav-link underline-link">
              Servicios
            </a>
            {isDropdownOpen.servicios && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Despacho Parroquial
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Misas
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Santísimo
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleHover("recursos", true)}
            onMouseLeave={() => handleHover("recursos", false)}
          >
            <a href="#contact" className="nav-link underline-link">
              Recursos
            </a>
            {isDropdownOpen.recursos && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Vía crucis
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Lecturas de la semana
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Novena de Navidad
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleHover("galeria", true)}
            onMouseLeave={() => handleHover("galeria", false)}
          >
            <a href="#contact" className="nav-link underline-link">
              Galería
            </a>
            {isDropdownOpen.galeria && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Fotos
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      href="#home"
                      className="dropdown-link underline-link-item"
                    >
                      Videos
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleHover("donaciones", true)}
            onMouseLeave={() => handleHover("donaciones", false)}
          >
            <a href="#contact" className="nav-link underline-link">
              Donaciones
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link underline-link">
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
