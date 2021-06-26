import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import all from "../images/allemployees.jpg";
import ceo from "../images/ceo.jpg";
import ceo2 from "../images/ceoworking1.jpg";
import ceo3 from "../images/ceoworking2.jpg";
import dust1 from "../images/dusting1.jpg";
import dust2 from "../images/dusting2.jpg";
import emp1 from "../images/employees1.jpg";
import emp2 from "../images/employees2.jpg";
import sweep from "../images/sweeping.jpg";

import Services from "../components/services";
import "../css/services.css";

const ServicesPage = () => {
  return (
    <Container fluid={true} className="services__bg">
      <Services />
      <Row>
        <Col>
          <Image
            className="my-3"
            src={all}
            rounded
            width="350"
            style={{ border: "2px solid #c19ccc" }}
          />
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              className="my-3"
              src={ceo}
              rounded
              width="200"
              style={{ border: "2px solid #c19ccc" }}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              className="my-3"
              src={ceo2}
              rounded
              width="200"
              style={{ border: "2px solid #c19ccc" }}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              className="my-3"
              src={ceo3}
              rounded
              width="200"
              style={{ border: "2px solid #c19ccc" }}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              className="my-3"
              src={dust1}
              rounded
              width="200"
              style={{ border: "2px solid #c19ccc" }}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              className="my-3"
              src={dust2}
              rounded
              width="200"
              style={{ border: "2px solid #c19ccc" }}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              className="my-3"
              src={emp1}
              rounded
              width="200"
              style={{ border: "2px solid #c19ccc" }}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              className="my-3"
              src={emp2}
              rounded
              width="200"
              style={{ border: "2px solid #c19ccc" }}
            />
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              className="my-3"
              src={sweep}
              rounded
              width="315"
              style={{ border: "2px solid #c19ccc" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesPage;
