import React from "react";
import Slide from "react-reveal/Slide";
import { Container, Row, Col } from "react-bootstrap";

import Revs from "../components/reviews";
import Hero from "../components/hero";
import Why from "../components/why";
import "../css/home.css";

const HomePage = () => {
  return (
    <>
      <Container fluid={true}>
        <Hero />
      </Container>
      <Container>
        <Why />
        <br />
        <br />
        <Row>
          <Col>
            <Slide left>
              <br />
              <h4>Office? Home? Vacation House?</h4>
              <p>
                No job is too big nor too little for us at Clean Freak! We cater
                to all cleaning needs regardless of size. Our highly experienced
                professionals are able to utilize speed without compromising
                quality. We clean corners, we don't cut them! That's what we
                stand by here at Clean Freak.
              </p>
            </Slide>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="right__img" />
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="left__img" />
          <Col>
            <Slide right>
              <br />
              <h4>
                Sometimes It's Best to Just Let the Professionals Handle It
              </h4>
              <p>
                We understand everybody can clean up after themselves, but what
                makes Clean Freak different, is our efficiency, time management,
                and organization skills. We thrive to not only provide the best
                clean, but also do it within our clients means. We are always on
                time - never late. Working with us is an experience you will
                never forget!
              </p>
            </Slide>
          </Col>
        </Row>
        <Revs />
      </Container>
    </>
  );
};

export default HomePage;
