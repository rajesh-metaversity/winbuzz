import "./styles.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import { Link } from "react-router-dom";
import { home } from "../../routes/PagesUrl";

const Iframes = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="scorecard_heading">
        <p>
          <Link to={home}>
            <ArrowBackIcon />
          </Link>
          <strong>NEWZELEND VS BANGLADESH</strong> 13/10/2023
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
