import OddsButton from "../oddsButton/OddsButton";
import tv from "../../assets/img/tv.svg";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
const InPlayOddRow = ({ live }) => {
  const oddsBg = {
    back: "#a5d9fe",
    lay: "#f8d0ce",
    disable: "#dedddd",
  };
  return (
    <div className={`odds-row-container ${live}`}>
      <div className="odds-row-left-col">
        <span>12/10/2023 13:00</span>
        <p>MELBOURNE STARS T10 VS HOBART HURRICANES T10</p>
      </div>
      <div className="odds-row-middle-col">
        <span className="live-inplay"></span>
        <img src={tv} alt="" />
        <SportsEsportsIcon />
        <span>F</span>
      </div>

      <div className="odds-row-right-col">
        <ul>
          <li>
            <OddsButton bg={oddsBg["back"]} />
            <OddsButton bg={oddsBg["lay"]} />
          </li>
          <li>
            <OddsButton bg={oddsBg["disable"]} />
            <OddsButton bg={oddsBg["disable"]} />
          </li>
          <li>
            <OddsButton bg={oddsBg["back"]} />
            <OddsButton bg={oddsBg["lay"]} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InPlayOddRow;
