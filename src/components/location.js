import React from "react";
import {
  RiWifiFill,
  RiBankCardLine,
  RiCarLine,
  RiHandHeartLine,
  RiPinDistanceLine,
  RiHandSanitizerLine,
} from "react-icons/ri";

import Slide from "react-reveal/Slide";
import { Row, Col, Table } from "react-bootstrap";

const location = () => {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} className="my-5">
        <Slide bottom>
          <div className="d-flex align-items-center justify-content-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.8048453735628!2d-118.06378453888324!3d34.58707341044523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2564b6be6dfbb%3A0xb963945051948def!2s38763%2037th%20St%20E%2C%20Palmdale%2C%20CA%2093550!5e0!3m2!1sen!2sus!4v1621272431023!5m2!1sen!2sus"
              width="100%"
              height="350"
              allowfullscreen=""
              loading="lazy"
              title="google maps embed"
            />
          </div>
        </Slide>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
        <Slide left>
          <div className="m-3 py-4 text-sm-center text-md-left text-lg-left">
            <h2>Location & Hours</h2>
            <br />
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sun</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td>Mon</td>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td>Tue</td>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td>Wed</td>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td>Thu</td>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td>Fri</td>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td>Sat</td>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Slide>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} className="my-5">
        <Slide right>
          <h4 className="my-3 text-center">Updated Amenities</h4>

          <p className="d-flex align-items-center justify-content-center">
            <RiWifiFill className="mr-2" color="#ffc500" />
            Free Wi-Fi
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiHandHeartLine className="mr-2" color="#ffc500" />
            In-Person Visits
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiCarLine className="mr-2" color="#ffc500" />
            Drive-to-you Service
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiPinDistanceLine className="mr-2" color="#ffc500" />
            Social Distancing Enforced
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiHandSanitizerLine className="mr-2" color="#ffc500" />
            Staff Sanitized Between Clients
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <RiBankCardLine className="mr-2" color="#ffc500" />
            Accepts Zelle Payments & Credit Cards
          </p>
        </Slide>
      </Col>
    </Row>
  );
};

export default location;
