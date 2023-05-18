import React from "react";
import "./Header.css";

function Header({ handleToggle }) {
  return (
    <div className="flex-header">
      <h1>
        Reviews TA Béc Cọp !!! <i class="fa-solid fa-square-xmark"></i>{" "}
      </h1>
      <p>
        <i
          onClick={handleToggle}
          className="fa-solid fa-circle-half-stroke"
        ></i>
      </p>
    </div>
  );
}

export default Header;
