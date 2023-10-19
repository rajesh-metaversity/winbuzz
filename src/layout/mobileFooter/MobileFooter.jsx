import React from "react";
import football from "../../assets/img/football.png";
import inPlay from "../../assets/img/in-play.png";
import home from "../../assets/img/home.png";
import casino from "../../assets/img/Casino.png";
import megaphone from "../../assets/img/megaphone.png";

///styles
import "./styles.scss";
const MobileFooter = () => {
  return (
    <div className="mobile-footer-container">
      <div className="mobile-footer-left-col">
        <ul>
          <li>
            <img src={football} alt="" />
            <span>Sports</span>
          </li>
          <li>
            <img src={inPlay} alt="" />
            <span>In Play</span>
          </li>
        </ul>
      </div>
      <div className="mobile-footer-right-col">
        <ul>
          <li>
            <img src={casino} alt="" />
            <span>Casino</span>
          </li>
          <li>
            <img src={megaphone} alt="" />
            <span>Promotion</span>
          </li>
        </ul>
      </div>
      <div className="mobile-footer-home">
        <img src={home} alt="" />
      </div>
    </div>
  );
};

export default MobileFooter;
