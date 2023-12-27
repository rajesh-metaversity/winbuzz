import OddsButton from "../oddsButton/OddsButton";
import tv from "../../assets/img/tv.svg";
import ball from "../../assets/img/ball.png";
import star from "../../assets/img/star.png";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
const InPlayOddRow = ({ live, index }) => {
  const oddsBg = {
    back: "#a5d9fe",
    lay: "#f8d0ce",
    disable: "#dedddd",
  };

  return (
    <div className={`odds-row-container  ${index == 1 && "live"}`}>
      <div className="betmobileparent">
        <div className="cricket_ball">
          <img src={ball} alt="ball" />
        </div>
        <div className="left_combo">
          <div className="odds-row-left-col">
            <span>{live?.openDate}</span>
            <p>{live?.matchName}</p>
          </div>
          <div className="odds-row-middle-col">
            {live?.inPlay && <span className="live-inplay"></span>}
            <img src={tv} alt="" />
            {live?.gm && <SportsEsportsIcon />}
            {live?.F && <span>F</span>}
            {live?.bm && <span>BM</span>}
          </div>
        </div>
      </div>

      <div className="odds-row-right-col">
        <div className="img_right-col" style={{ width: "10%" }}>
          <img src={star} alt="sss" />
        </div>
        <ul>
          <li>
            <button className="odds-btn" style={{ background: oddsBg["back"] }}>
              <span>{live?.team1Back}</span>
              <span>0</span>
            </button>
            <button className="odds-btn" style={{ background: oddsBg["lay"] }}>
              <span>{live?.team1Lay}</span>
              <span>0</span>
            </button>
            {/* <OddsButton back1= bg={oddsBg["back"]} /> */}
            {/* <OddsButton bg={oddsBg["lay"]} /> */}
          </li>
          <li>
            <button
              className="odds-btn"
              style={{ background: oddsBg["disable"] }}
            >
              <span>{live?.drawBack}</span>
              <span>0</span>
            </button>
            <button
              className="odds-btn"
              style={{ background: oddsBg["disable"] }}
            >
              <span>{live?.drawLay}</span>
              <span>0</span>
            </button>
          </li>
          <li>
            <button className="odds-btn" style={{ background: oddsBg["back"] }}>
              <span>{live?.team2Back}</span>
              <span>0</span>
            </button>
            <button className="odds-btn" style={{ background: oddsBg["lay"] }}>
              <span>{live?.team2Lay}</span>
              <span>0</span>
            </button>
            {/* <OddsButton bg={oddsBg["back"]} />
            <OddsButton bg={oddsBg["lay"]} /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InPlayOddRow;
