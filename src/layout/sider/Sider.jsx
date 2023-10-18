import { useEffect, useState } from "react";
import cricket from "../../assets/img/cricket.svg";
import football from "../../assets/img/football.svg";
import arrow from "../../assets/img/rightArrow.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
///styles
import "./styles.scss";
import { useActiveSportMutation } from "../../Services/ActiveSportList/ActiveSportList";
import { useActiveMatchMutation } from "../../Services/ActiveSportList/ActiveMatch";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
const SiderBar = () => {
  const [trigger, { data, isLoading, isError }] = useActiveSportMutation();
  const [trigge, { data: activeMatch, isLoading: jkm, isError: bhjn }] =
    useActiveMatchMutation();

  useEffect(() => {
    trigger();
  }, []);


  const [matchName, setMatchName] = useState("second");
  const [activeSlide, setActiveSlide] = useState(false);
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  return (
    <div className={isBreakPoint ? "sider-active" : "sider-container"} onClick={(e)=>e.stopPropagation()}>
      <ul className="sider-container-ul">
        {data?.data.map((item) => {
          return (
            <>
              <li
                onClick={() => {
                  setMatchName(item?.sportName);
                  setActiveSlide(true);
                  trigge(item.sportId);
                }}
              >
                <p>
                  <img src={item?.sportImage} alt="cricket" />
                  {item.sportName}
                </p>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </li>
            </>
          );
        })}
      </ul>
      <div
        className={activeSlide ? "slide-sider-disable" : "slide-sider-active"}
      >
        <ul className="sider-container-ul">
          <p onClick={() => setActiveSlide(false)} className="previous">
            <ArrowBackIosNewIcon /> Previuos
          </p>
          <p className="matchName">{matchName}</p>
          {activeMatch?.data.map((item) => {
            if (item.matchName) {
              return (
                <>
                  <li onClick={() => setActiveSlide(true)}>
                    <p>{item.matchName}</p>
                    <span>
                      <img src={arrow} alt="" />
                    </span>
                  </li>
                </>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default SiderBar;
