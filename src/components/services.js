import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const services = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col className="my-3">
          <br />
          <br />
          <h2 className="text-center text-white">Services We Offer</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            <Card.Body>Deep Cleaning</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            <Card.Body>Move In / Move Out Cleaning</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            {" "}
            <Card.Body>Post Construction Cleaning</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            {" "}
            <Card.Body>Window Cleaning</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            {" "}
            <Card.Body>Post Event Cleaning</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            {" "}
            <Card.Body>Garbage Removal</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            {" "}
            <Card.Body>Office Cleaning</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            {" "}
            <Card.Body>Furniture Cleaning</Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4}>
          <Card className="my-3 services__card">
            {" "}
            <Card.Body>Tile & Grout Cleaning</Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <div className="text-center">
            <Button
              variant="secondary"
              className="hero__btn"
              size="lg"
              onClick={() =>
                window.open(
                  "https://squareup.com/appointments/book/450201de-da15-4b12-af7a-3cb560acb4be/71M2A87TKC228/services"
                )
              }
            >
              Book Us Today
            </Button>{" "}
            <Button
              variant="secondary"
              className="hero__btn"
              size="lg"
              onClick={() => window.open("tel:661-607-3159")}
            >
              Give Us A Call
            </Button>{" "}
          </div>
          <h6 className="my-5 text-center text-white">
            *All services can be requested for residential or commercial if
            necessary. Please note that pricing may vary.
          </h6>
        </Col>
      </Row>
    </>
  );
};

export default services;

/*

window tinting auto, comercial, resizable
paint protection
*/
