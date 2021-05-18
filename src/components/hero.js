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
            We clean corners, we do not cut them.
          </h4>
          <div className="my-5">
            <Button variant="secondary" className="hero__btn" size="lg">
              Book Us Today
            </Button>{" "}
            <Button variant="secondary" className="hero__btn" size="lg">
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
