// Imports
import React from "react";
import "./slider.css";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function Slider() {
  return (
    <div className="main-slider">
      <div className="slide-1 slide">
        <div>
          <h1>Fresh Vegetables <br/>Big discount</h1>
          <span>Save up to 50% off on your first order</span>
          <form action="">
            <input type="text" placeholder="Your emaill address" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>

      <span>
        <ArrowCircleLeftIcon className="slide-left i" />
      </span>
      <span>
        <ArrowCircleRightIcon className="slide-right i" />
      </span>
    </div>
  );
}

export default Slider;
