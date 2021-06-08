import React from "react";
import Slide from "react-reveal/Slide";
import { Container, Row, Col, Button, Card, Table } from "react-bootstrap";

import "../css/about.css";

const AboutPage = () => {
  return (
    <>
      <Container fluid={true} className="container-fluid">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} className="my-5">
            <Slide left>
              <br />
              <div>
                <h4 className="my-5 text-center">About Us!</h4>
                <h6 className="my-4">Established in 2005</h6>
                <p>
                  Clean Freak was originally founded in 2005 by our CEO Jennyfer
                  Stevens. Originally branded as "PM Janitorial Services",
                  Stevens felt as if it would be best to rebrand after a few
                  years of service. "PM Janitorial Services" just wasn't
                  sticking and it was tough to market something that didn't pop.
                  That's when we came across the concept of "Clean Freak". Clean
                  Freak is not only the best janitorial services in Southern
                  California, but we have the work ethic to blow your mind away
                  with how detail oriented our team is. We clean corners, we do{" "}
                  <strong>NOT</strong> cut them.
                </p>
              </div>

              <div className="text-center my-5">
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
            </Slide>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="about__bg" />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h4 className="my-3 text-center">Detailed Pricing</h4>
            <Table striped bordered hover size="sm" className="my-3">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Residential Cleaning</td>
                  <td>$70-80/hr (2 team members, 2 hour minimum)</td>
                </tr>
                <tr>
                  <td>Real Estate Cleaning</td>
                  <td>$80/hr (2 team members, 2 hour minimum)</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="my-5 text-center">
              <p>Each additional team member is $40 per hour</p>
              <p>Some areas require a $25 fuel charge</p>
              <p>All supplies and equipment is provided by us</p>
              <p>
                Virtual estimates & phone quotes available ~{" "}
                <a
                  href="tel:661-607-3159"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Give us a ring
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="my-1 mx-3">
              <h4 className="my-3 text-center">
                Additional Booking Information
              </h4>
              <ul>
                <li>
                  When booking a move out or move in cleaning always make sure
                  the team has instructions on how to get in. Make sure the
                  seller or buyer has water and power turned on in the property
                  of service. Makes you your team has any gate codes, door codes
                  or lockbox codes to makes the process go smoother
                </li>
                <li>Make sure your team is aware of any pets in the home.</li>
                <li>
                  Remember to turn off any alarms or security systems prior to
                  your appointment.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;

/*




If you can add winner of SCV best of Signal 2016 and 2017 

2016 Santa Clarita chamber of commerce 40 under 40 winner .
*/
