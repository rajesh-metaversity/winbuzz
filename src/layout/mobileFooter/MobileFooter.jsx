import React from "react";
import football from "../../assets/img/football.png";
import inPlay from "../../assets/img/in-play.png";
import home from "../../assets/img/home.png";
import casino from "../../assets/img/Casino.png";
import megaphone from "../../assets/img/megaphone.png";

///styles
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
const MobileFooter = () => {

  const nav = useNavigate()

  const CricketPage = () => {
    nav("game_list/4")

  }
  return (
    <div className="mobile-footer-container">
      <div className="mobile-footer-left-col">
        <ul>
          <li onClick={() => CricketPage()} className="link">
            <img src={football} alt="" />
            <Link className="link">
            <span >Sports</span>
            </Link>
          </li>
          <li>
            <img src={inPlay} alt="" />
            <Link to="/" className="link">

            <span>In Play</span>
            </Link>
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
