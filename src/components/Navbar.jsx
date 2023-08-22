import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/SJT-BN.png';
import { BsFacebook } from 'react-icons/bs';
import { debounce } from "lodash";

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
    catequesis: false,
    servicios: false,
    recursos: false,
    galeria: false,
    donaciones: false,
    contactanos: false,
  });

 const handleHover = (item, isHovering) => {
   setIsDropdownOpen((prevState) => ({ ...prevState, [item]: isHovering }));

   // Close all other menus when mouse enters a new item
   if (isHovering) {
     Object.keys(isDropdownOpen).forEach((key) => {
       if (key !== item) {
         setIsDropdownOpen((prevState) => ({ ...prevState, [key]: false }));
       }
     });
   }
 };

  const debouncedHandleHover = debounce(handleHover, 100);

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
            onMouseEnter={() => debouncedHandleHover("conocenos", true)}
            onMouseLeave={() => debouncedHandleHover("conocenos", false)}
          >
            <Link to="/historia" className="nav-link underline-link">
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
                      to="/administracion"
                      className="dropdown-link underline-link-item"
                    >
                      Administración
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/ambientes-del-templo"
                      className="dropdown-link underline-link-item"
                    >
                      Ambientes del templo
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/san-judas-tadeo"
                      className="dropdown-link underline-link-item"
                    >
                      Imagen de San Judas Tadeo
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => debouncedHandleHover("groups", true)}
            onMouseLeave={() => debouncedHandleHover("groups", false)}
          >
            <Link to="/niños" className="nav-link underline-link">
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
            onMouseEnter={() => debouncedHandleHover("sacramentos", true)}
            onMouseLeave={() => debouncedHandleHover("sacramentos", false)}
          >
            <Link to="/bautismo" className="nav-link underline-link">
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
            onMouseEnter={() => debouncedHandleHover("servicios", true)}
            onMouseLeave={() => debouncedHandleHover("servicios", false)}
          >
            <Link to="/despacho-parroquial" className="nav-link underline-link">
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
                      to="/capillas"
                      className="dropdown-link underline-link-item"
                    >
                      Capillas
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/santa-misa"
                      className="dropdown-link underline-link-item"
                    >
                      Santa Misa
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
            onMouseEnter={() => debouncedHandleHover("catequesis", true)}
            onMouseLeave={() => debouncedHandleHover("catequesis", false)}
          >
            <Link to="/catequesis" className="nav-link underline-link">
              Catequesis
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => debouncedHandleHover("recursos", true)}
            onMouseLeave={() => debouncedHandleHover("recursos", false)}
          >
            <Link to="/rosario" className="nav-link underline-link">
              Recursos
            </Link>
            {isDropdownOpen.recursos && (
              <div className="dropdown-content">
                {/* Place the sub-menu items or additional links here */}
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <Link
                      to="/rosario"
                      className="dropdown-link underline-link-item"
                    >
                      Rosario y oraciones
                    </Link>
                  </li>
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
                      to="/pan-de-la-palabra"
                      className="dropdown-link underline-link-item"
                    >
                      Pan de la Palabra
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link
                      to="/novena-sjt"
                      className="dropdown-link underline-link-item"
                    >
                      Novena de San Judas Tadeo
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
            onMouseEnter={() => debouncedHandleHover("galeria", true)}
            onMouseLeave={() => debouncedHandleHover("galeria", false)}
          >
            <Link to="/fotos" className="nav-link underline-link">
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
            onMouseEnter={() => debouncedHandleHover("donaciones", true)}
            onMouseLeave={() => debouncedHandleHover("donaciones", false)}
          >
            <Link to="/donaciones" className="nav-link underline-link">
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
              className="nav-link"
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
