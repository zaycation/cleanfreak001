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
                Clean Freak was originally founded in 2005 by our CEO Jennyfer
                Stevens. Originally branded as "PM Janitorial Services", Stevens
                felt as if it would be best to rebrand after a few years of
                service. "PM Janitorial Services" just wasn't sticking and it
                was tough to market something that didn't pop. That's when we
                came across the concept of "Clean Freak". Clean Freak is not
                only the best janitorial services in Southern California, but we
                have the work ethic to blow your mind away with how detail
                oriented our team is. We clean corners, we do <strong>NOT</strong> cut them.
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
