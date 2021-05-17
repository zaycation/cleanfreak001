import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../css/about.css";

const AboutPage = () => {
  return (
    <Container fluid={true} className="container-fluid">
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="my-5">
          <div>
            <h4 className="my-5">About Us!</h4>
            <h6 className="my-4">Established in 2005</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut!
            </p>
          </div>
          <div className="text-center my-5">
            <a href="tel:661-679-8468">
              <Button variant="dark" className="">
                Get Instant Quote
              </Button>
            </a>{" "}
            <a
              href="https://www.yelp.com/biz/al-s-window-tinting-lancaster?hrid=7p4iu_2_W_VvwVSrGujISg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="dark" className="">
                View Yelp Reviews
              </Button>
            </a>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="about__bg" />
      </Row>
    </Container>
  );
};

export default AboutPage;
