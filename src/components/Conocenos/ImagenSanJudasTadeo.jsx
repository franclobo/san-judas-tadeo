import React from 'react'
import SanJudasTadeo from '../../assets/images/sanjudastadeo.jpg';

function ImagenSanJudasTadeo() {
  return (
    <div className="imagensanjudastadeo">
      <img
        src={SanJudasTadeo}
        alt="San Judas Tadeo"
        className="sanjudastadeo"
      />
      <div className="simbolos">
        <h1>San Judas Tadeo</h1>
        <h2>Patrono de los casos difíciles y desesperados</h2>
        <p>
          San Judas Tadeo es uno de los santos que mayor arraigo tienen con los
          creyentes de la religión católica. También es conocido como el
          "Patrono de las causas difíciles o desesperadas". Su fiesta magna es
          el 28 de octubre y regularmente año tras año, cientos de fieles acuden
          a su parroquia a visitarlo para agradecerle los milagros o favores
          recibidos o para hacerle peticiones.
          <br /> Su representación generalmente está acompañada de elementos muy
          característicos como un manto verde, un medallón una flama encima de
          su cabeza y un garrote. Cada uno de ellos tiene oculto un significado
          especial y a continuación te lo revelamos.
          <br />
          <h3>Fuego sobre su cabeza.</h3>
          Es la representación del espíritu santo descendiendo sobre él y los
          otros discípulos de Jesús, de a cuerdo con lo que mencionan en el
          capítulo dos del libro Hechos de los Apóstoles.
          <br />
          <h3>Manto verde</h3>
          El verde es un color que en muchas ocasiones simboliza la esperanza y
          por eso su manto es de esa tonalidad. A San Judas Tadeo también se le
          conoce como el Santo Patrono de la Esperanza. <br />
          <h3>Medallón</h3>
          La historia cuenta que cuando el rey Abgaro V enfermó, le pidió a
          Tadeo que buscara a Jesús para que lo curara. Cuando este último se
          enteró del asunto, se secó con un paño y se lo entregó a Tadeo para
          que se lo llevara con el soberano, quien recuperó su salud, pero en la
          toalla quedó impreso el rostro de Jesús, mismo que aparece en la
          efigie que cuelga en la imagen de San Judas. <br />
          <h3>Garrote</h3>
          Simboliza el martirio que sufrió al momento
          de su muerte, pues fue golpeado con un garrote antes de ser degollado
          con un hacha.
        </p>
      </div>
    </div>
  );
}

export default ImagenSanJudasTadeo
