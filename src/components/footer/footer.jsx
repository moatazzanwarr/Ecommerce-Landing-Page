// Imports
import React from "react";
import "./footer.css";
import Banner from "./banner";

// Images
import footerBanner from "../../assets/images/footer-banner-1.png";
import footerIcon1 from "../../assets/images/footerIcon1.png";
import footerIcon2 from "../../assets/images/footerIcon2.png";
import footerIcon3 from "../../assets/images/footerIcon3.png";
import footerIcon4 from "../../assets/images/footerIcon4.png";
import footerIcon5 from "../../assets/images/footerIcon5.png";

//Data
import data from './data.json'
const src = [footerIcon1, footerIcon2, footerIcon3, footerIcon4,footerIcon5];

function Footer() {
  return (
    <footer>
      <Banner src={footerBanner} />
      <div className="center">
        {data.map((d, i) => (
          <div className="item" key={d.id}>
            <div className="icon">
              <img src={src[i]} alt="icon" />
            </div>
            <div className="text">
              <h4>{d.title}</h4>
              <span>{d.type}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="boottom">
        
      </div>
    </footer>
  );
}

export default Footer;
