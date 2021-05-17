import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FcMoneyTransfer, FcFullTrash, FcAlarmClock } from "react-icons/fc";

const why = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="text-center">
            <h2 className="my-5">Why Work With Us?</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="my-3 text-center">
            <FcFullTrash size={48} />
            <h4>Extreme Clean</h4>
            <h6>We don't cut corners... We clean them.</h6>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="my-3 text-center">
            <FcMoneyTransfer size={48} />
            <h4>Great Service... Great Prices</h4>
            <h6>
              Affordable prices for <strong>every one</strong>. No matter the
              size.
            </h6>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="my-3 text-center">
            <FcAlarmClock size={48} />
            <h4>Fast & Efficient</h4>
            <h6>Always on time... Never a need to rush.</h6>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default why;
