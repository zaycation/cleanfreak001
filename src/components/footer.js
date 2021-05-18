import React from "react";
import LightSpeed from "react-reveal/LightSpeed";

const footer = () => {
  return (
    <>
      <hr className="my-1" />
      <div className="d-flex align-items-stretch justify-content-between">
        <LightSpeed left>
          <p className="ml-3">© 2021 Clean Freak</p>
        </LightSpeed>
        <LightSpeed right>
          <a href="tel:661-607-3159">
            <p className="mr-3 footer__txt">+1 (661) 607-3159</p>
          </a>
        </LightSpeed>
      </div>
    </>
  );
};

export default footer;
