import React from "react";
import Loc from "../components/location";
import { Button } from "react-bootstrap";

const ContactPage = () => {
  return (
    <>
      <Loc />

      <div className="text-center my-3">
        <Button variant="secondary" className="hero__btn" size="lg">
          Book Us Today
        </Button>{" "}
        <Button variant="secondary" className="hero__btn" size="lg">
          Give Us A Call
        </Button>{" "}
      </div>
      <br />
      <br />
    </>
  );
};

export default ContactPage;
