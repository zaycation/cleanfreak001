import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import useScript from "../hooks/useScript";

const BookingPage = (props) => {
  useScript(
    "https://square.site/appointments/buyer/widget/450201de-da15-4b12-af7a-3cb560acb4be/71M2A87TKC228.js"
  );

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <h4>Book Your Appointment Today!</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookingPage;
