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
            <a href="tel:661-679-8468">
              <Button variant="light" className="hero__btn">
                Get Instant Quote
              </Button>
            </a>{" "}
            <a
              href="https://www.yelp.com/biz/al-s-window-tinting-lancaster?hrid=7p4iu_2_W_VvwVSrGujISg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="light" className="hero__btn">
                View Yelp Reviews
              </Button>
            </a>
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
