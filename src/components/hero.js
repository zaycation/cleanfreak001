import React from "react";
import Slide from "react-reveal/Slide";
import TextLoop from "react-text-loop";
import { Row, Col, Button } from "react-bootstrap";
//import { FaSortDown } from "react-icons/fa";
//import { HashLink } from "react-router-hash-link";

const hero = () => {
  return (
    <Row className="my-5 hero__bg">
      <Col className="my-5 text-center">
        <Slide bottom>
          <br />
          <h1 className="text-white bold-txt my-5">
            Clean Freak Janitorial Services
          </h1>
          <h5 className="text-white bold-txt">
            Servicing, but not limited to:
            <TextLoop>
              <h5 className="ml-2 options bold-txt">Antelope Valley</h5>
              <h5 className="ml-2 options bold-txt">Santa Clarita Valley</h5>
              <h5 className="ml-2 options bold-txt">San Fernando Valley</h5>
            </TextLoop>
          </h5>
          <h4 className="text-white bold-txt my-5">
            We do the dirty work so you don’t have to!
          </h4>
          <div className="my-5">
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
    </Row>
  );
};

export default hero;

/*

*/
