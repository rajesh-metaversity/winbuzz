import React from "react";
import ball from "../../assets/img/ball.png";

const Title = ({ name }) => {
  return (
    <>
      <div className="inplay-titile-box">
        <div className="inplay-title-left-col">
         
          <img src={ball} alt="" />
          {name}
        </div>
        <div className="inplay-title-right-col">
          <ul>
            <li>1</li>
            <li>x</li>
            <li>2</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Title;
