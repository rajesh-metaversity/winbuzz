import "./styles.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import { Link } from "react-router-dom";
import { home } from "../../routes/PagesUrl";

const Iframes = ({ odds }) => {
  console.log("ODDS", odds)
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="scorecard_heading">
        <p>
          <Link to={home}>
            <ArrowBackIcon />
          </Link>
          {/* {odds?.Odds?.map((data) => console.log(data.matchName, "data"))} */}
          {/* {odds?.Odds?.map((el) => {
            // console.log(el, "eldfvfv")
            return (
              <>
                <p>{el?.eventTime }</p>

              </>
            )
          })} */}
          <strong >{odds?.Odds?.length ? odds?.Odds[0].matchName : ""}</strong> 
          <stong>{odds?.Odds?.length ? odds?.Odds[0].eventTime : "" }</stong>
          
        </p>
        <button onClick={() => setToggle(!toggle)} className="score_btn">
          <RemoveRedEyeIcon />
          Score
        </button>
      </div>
      <div className={toggle ? "score_board2" : "score_board"}></div>
    </>
  );
};

export default Iframes;
