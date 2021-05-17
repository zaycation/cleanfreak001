import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Hero from "../components/hero";
import Why from "../components/why";
//import Loc from "../components/location";
//import Rev from "../components/reviews";
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
            <br />
            <h4>Lorem ipsum dolor sit am</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut!
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="right__img" />
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="left__img" />
          <Col>
            <br />
            <h4>Lorem ipsum dolor sit am</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
