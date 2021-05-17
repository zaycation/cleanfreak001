import React from "react";

const footer = () => {
  return (
    <>
      <hr className="my-1" />
      <div className="d-flex align-items-stretch justify-content-between">
        <p className="ml-3">© 2021 Clean Freak</p>
        <a href="tel:661-607-3159">
          <p className="mr-3 footer__txt">+1 (661) 607-3159</p>
        </a>
      </div>
    </>
  );
};

export default footer;
