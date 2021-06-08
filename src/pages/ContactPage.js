import React from "react";
import Loc from "../components/location";
import { Button, Container, Row, Col } from "react-bootstrap";

const ContactPage = () => {
  return (
    <>
      <Loc />
      <Container>
        <Row>
          <Col>
            <div className="text-center my-3">
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
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
};

export default ContactPage;
