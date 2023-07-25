import React from 'react';
import Logo from '../assets/images/Logo-SJT-BN.png';
import LocationOn from '../assets/icons/LocationOn.svg';
import { PhoneOutlined, MailOutlined, ClockCircleOutlined } from '@ant-design/icons';
import ContactForm from './ContactForm';

function Footer() {
  return (
    <footer className="footer">
      <article className="footer__article">
        <h3 className="footer__title">
          <img src={LocationOn} alt="LocationOn" style={{ width: "30px" }} />
          Dirección
        </h3>
        <p className="footer__text">
          Av. Pablo Esteban Yerovi Romo y calle N81C
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8136969192415!2d-78.51316292634952!3d-0.0872253999119168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d585c8ca0ee283%3A0xb686422582ac4035!2sIglesia%20Cat%C3%B3lica%20San%20Judas%20Tadeo%20-%20La%20Rold%C3%B3s!5e0!3m2!1ses-419!2sec!4v1690150084696!5m2!1ses-419!2sec"
          width="250"
          height="250"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Parroquia San Judas Tadeo"
        />
      </article>
      <article className="footer__article">
        <ContactForm />
      </article>
      <article className="footer__article contact">
        <img src={Logo} alt="Logo" style={{ width: "300px" }} />
        <h3 className="footer__title">Contacto</h3>
        <p className="footer__text">
          <PhoneOutlined />
          Teléfono: +593 2-249-6446
        </p>
        <p className="footer__text">
          <MailOutlined />
          Email: sanjudastadeolaroldos@gmail.com
        </p>
        <p className="footer__text">
          <ClockCircleOutlined />
          Horario de atención: 15:00 - 18:00 de miércoles a sábado
        </p>
      </article>
    </footer>
  );
}

export default Footer
