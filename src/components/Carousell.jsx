import Carousel from "react-bootstrap/Carousel";
import Roldós from "../assets/images/Roldós.jpg";
import Concejo from "../assets/images/Concejo.jpg";
import Velasco from "../assets/images/San Antonio de Padua.jpeg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Roldós}
          alt="First slide"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Parroquia San Judas Tadeo</h3>
          <p>La Roldós.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Concejo}
          alt="Second slide"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Capilla San Francisco Javier</h3>
          <p>Concejo Provincial.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Roldós}
          alt="Third slide"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Capilla San José de Cangahua</h3>
          <p>San José de Cangahua.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Velasco}
          alt="Fourth slide"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Capilla San Antonio de Padua</h3>
          <p>Catzuqui de Velasco.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Roldós}
          alt="Fifth slide"
          style={{ height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Capilla La Hacienda</h3>
          <p>La hacienda.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
