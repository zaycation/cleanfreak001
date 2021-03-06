import React from "react";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { Row, Col } from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import { FcMoneyTransfer, FcFullTrash, FcAlarmClock } from "react-icons/fc";

const why = () => {
  return (
    <>
      <Row>
        <Col>
          <Flip bottom>
            <div className="text-center">
              <h2>Why Work With Us?</h2>
              <a
                href="https://www.facebook.com/CLEANFREAKCLUB/reviews"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-muted d-flex justify-content-center align-items-center">
                  5.0/5.0{" "}
                  <FaRegStar size={16} color="#D7BE69" className="mr-2" />{" "}
                  Reviews on Facebook
                </p>
              </a>
            </div>
          </Flip>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Slide left>
            <div className="my-3 text-center">
              <FcFullTrash size={48} />
              <h4>Extreme Clean</h4>
              <h6>We don't cut corners... We clean them.</h6>
            </div>
          </Slide>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Slide bottom>
            <div className="my-3 text-center">
              <FcMoneyTransfer size={48} />
              <h4>Great Service... Great Prices</h4>
              <h6>
                Affordable prices for <strong>every one</strong>. No matter the
                size.
              </h6>
            </div>
          </Slide>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Slide right>
            <div className="my-3 text-center">
              <FcAlarmClock size={48} />
              <h4>Fast & Efficient</h4>
              <h6>Always on time... Never a need to rush.</h6>
            </div>
          </Slide>
        </Col>
      </Row>
    </>
  );
};

export default why;
