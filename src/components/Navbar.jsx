import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/SJT-BN.png';
import { BsFacebook } from 'react-icons/bs';

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
            <Link to="/historia" className="nav-link">
              Conócenos
            </Link>
            {isDropdownOpen.conocenos && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <Link
                      to="/historia"
                      className="dropdown-link underline-link-item"
                    >
                      Historia
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/nuestro-parroco"
                      className="dropdown-link underline-link-item"
                    >
                      Nuestro párroco
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/templo"
                      className="dropdown-link underline-link-item"
                    >
                      Ambientes del templo
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/asociaciones"
                      className="dropdown-link underline-link-item"
                    >
                      Asociaciones
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/nuestra-senora"
                      className="dropdown-link underline-link-item"
                    >
                      Imagen de Nuestra Señora de la Misericordia
                    </Link>
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
            <Link to="/niños" className="nav-link">
              Grupos
            </Link>
            {isDropdownOpen.groups && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <Link
                      to="/niños"
                      className="dropdown-link underline-link-item"
                    >
                      Niños
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/jovenes"
                      className="dropdown-link underline-link-item"
                    >
                      Jóvenes
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/adultos"
                      className="dropdown-link underline-link-item"
                    >
                      Adultos y Familias
                    </Link>
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
            <Link
              to="/bautismo"
              className="nav-link"
            >
              Sacramentos
            </Link>
            {isDropdownOpen.sacramentos && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <Link
                      to="/bautismo"
                      className="dropdown-link underline-link-item"
                    >
                      Bautismo
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/reconciliacion"
                      className="dropdown-link underline-link-item"
                    >
                      Reconciliación
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/eucaristia"
                      className="dropdown-link underline-link-item"
                    >
                      Eucaristia
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/confirmacion"
                      className="dropdown-link underline-link-item"
                    >
                      Confirmación
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/matrimonio"
                      className="dropdown-link underline-link-item"
                    >
                      Matrimonio
                    </Link>
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
            <Link
              to="/despacho-parroquial"
              className="nav-link"
            >
              Servicios
            </Link>
            {isDropdownOpen.servicios && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <Link
                      to="/despacho-parroquial"
                      className="dropdown-link underline-link-item"
                    >
                      Despacho Parroquial
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/misas"
                      className="dropdown-link underline-link-item"
                    >
                      Misas
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/santisimo"
                      className="dropdown-link underline-link-item"
                    >
                      Santísimo
                    </Link>
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
            <Link
              to="/via-crucis"
              className="nav-link"
            >
              Recursos
            </Link>
            {isDropdownOpen.recursos && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <Link
                      to="/via-crucis"
                      className="dropdown-link underline-link-item"
                    >
                      Vía crucis
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/lecturas"
                      className="dropdown-link underline-link-item"
                    >
                      Lecturas de la semana
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/novena-navidad"
                      className="dropdown-link underline-link-item"
                    >
                      Novena de Navidad
                    </Link>
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
            <Link
              to="/fotos"
              className="nav-link"
            >
              Galería
            </Link>
            {isDropdownOpen.galeria && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <Link
                      to="/fotos"
                      className="dropdown-link underline-link-item"
                    >
                      Fotos
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/videos"
                      className="dropdown-link underline-link-item"
                    >
                      Videos
                    </Link>
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
            <Link
              to="/donaciones"
              className="nav-link"
            >
              Donaciones
            </Link>
          </li>
          <li>
            <a href="#contact" className="nav-link underline-link">
              Contáctanos
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100064395382823&mibextid=ZbWKwL"
              className="nav-link underline-link"
            >
              <BsFacebook />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
