import React from "react";
import code from '../../images/image-qr-code.png'
import "./Central.css";
function Central() {
  return (
    <div className="container">
      <div className="div-centro">
        <img src={code} alt="" />
        <div className="text">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Central;
