import { ItemCount } from "./ItemCount";
import imagenPrueba from "../assets/Pc_gamer_1.png";

//
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ItemDetail() {
  return (
    <Container>
      <Container>
        <Row>
          <Col md={8}>
            <div className="ContenedorDetailItemIzq">
              <h1>Nombre Producto</h1>
              <img src={imagenPrueba} alt="" />
            </div>
          </Col>
          <Col
            md={4}
            className="d-flex align-items-center text-center justify-content-center"
          >
            <div className="ContenedorDetailItemDer">
              <h1>190 000</h1>
              <ItemCount />
              <button className="BotonComprar">Comprar</button>
              <h2>Stcok: </h2>
            </div>
          </Col>
        </Row>
        <h2>Especificaciones</h2>
        <Row>
          <Col md={4}></Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </Container>
  );
}

// <div className="ConteinerDivItemDetail">
// <img src={imagenPrueba} alt="" />
//   <h1>Nombre Producto</h1>
//   <p>Descripcion</p>
//   <ItemCount />
// <button className="BotonComprar">Comprar</button>
//   <h2>Stcok: </h2>
// </div>
