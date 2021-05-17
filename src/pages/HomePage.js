import React from "react";
import { Container } from "react-bootstrap";

import Hero from "../components/hero";
import Why from "../components/why";
import Loc from "../components/location";
import Rev from "../components/reviews";
import "../css/home.css";

const HomePage = () => {
  return (
    <Container fluid={true}>
      <Hero />
      <Why />
    </Container>
  );
};

export default HomePage;
