import React from "react";
import Slide from "react-reveal/Slide";
import { Row, Col, Button } from "react-bootstrap";
//import { FaSortDown } from "react-icons/fa";
//import { HashLink } from "react-router-hash-link";

const hero = () => {
  return (
    <Row className="my-5">
      <Col xs={12} sm={12} md={6} lg={6} className="my-2 hero__bg" />
      <Col xs={12} sm={12} md={6} lg={6} className="my-3">
        <Slide right>
          <br />
          <h1 className="text-xs-center text-sm-center text-md-left text-lg-left">
            {" "}
            Clean Freak Janitorial Services
          </h1>
          <br />
          <p className="text-xs-center text-sm-center text-md-left text-lg-left text-muted my-1">
            Servicing the following areas:
          </p>
          <h5 className="text-xs-center text-sm-center text-md-left text-lg-left">
            Antelope Valley | Santa Clarita Valley | San Fernando Valley
          </h5>
          <br />
          <br />
          <h3 className="text-xs-center text-sm-center text-md-left text-lg-left">
            We clean corners, we do not cut them.
          </h3>
          <br />
          <br />
          <Button block variant="secondary" className="hero__btn">
            Give Us A Call
          </Button>{" "}
          <br />
          <br />
          <Button block variant="secondary"className="hero__btn">
            Shoot Us An E-mail
          </Button>{" "}
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.8048453735628!2d-118.06378453888324!3d34.58707341044523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2564b6be6dfbb%3A0xb963945051948def!2s38763%2037th%20St%20E%2C%20Palmdale%2C%20CA%2093550!5e0!3m2!1sen!2sus!4v1621272431023!5m2!1sen!2sus"
            width="100%"
            height="350"
            allowfullscreen=""
            loading="lazy"
            title="google maps embed"
            className="map__frame"
          />
        </Slide>
      </Col>
    </Row>
  );
};

export default hero;
