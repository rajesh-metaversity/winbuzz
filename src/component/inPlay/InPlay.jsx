import inplayico from "../../assets/img/inplayico.png";

import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
const InPlayHeading = ({ headName }) => {
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  return (
    <>
      <div className="inplay-container">
        <div className="inplay-heading">
          {isBreakPoint ? (
            <PlayCircleFilledWhiteIcon />
          ) : (
            <img src={inplayico} alt="" />
          )}
          {headName}
        </div>
      </div>
    </>
  );
};

export default InPlayHeading;
