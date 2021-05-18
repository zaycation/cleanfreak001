import React from "react";
import Slide from "react-reveal/Slide";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../css/about.css";

const AboutPage = () => {
  return (
    <Container fluid={true} className="container-fluid">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="my-5">
          <Slide left>
            <br />
            <div>
              <h4 className="my-5">About Us!</h4>
              <h6 className="my-4">Established in 2005</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut!
              </p>
            </div>

            <div className="text-center my-5">
              <Button variant="secondary" className="hero__btn" size="lg">
                Book Us Today
              </Button>{" "}
              <Button variant="secondary" className="hero__btn" size="lg">
                Give Us A Call
              </Button>{" "}
            </div>
          </Slide>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="about__bg" />
      </Row>
    </Container>
  );
};

export default AboutPage;
