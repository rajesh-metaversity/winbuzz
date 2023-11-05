import React, { useState } from "react";
import arrow from "../../assets/img/rightArrow.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link, useNavigate } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
///styles
import "./styles.scss";
import { useActiveSportQuery } from "../../Services/ActiveSportList/ActiveSportList";
import { useActiveMatchMutation } from "../../Services/ActiveSportList/ActiveMatch";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
import cricketImage from "../../assets/cricket.svg";
import tennisImage from "../../assets/tennis.svg";
import footballImage from "../../assets/football.svg";
import horseRidingImage from "../../assets/horse.svg";
import kabaddiImage from "../../assets/kabaddi.svg";
import casino from "../../assets/int.svg";
import { multi_market } from "../../routes/PagesUrl";
export const sportImages = {
  Cricket: cricketImage,
  Tennis: tennisImage,
  Football: footballImage,
  "Horse racing": horseRidingImage,
  Kabaddi: kabaddiImage,
};

const SiderBar = () => {
  const { data, isLoading, isError } = useActiveSportQuery();
  const [trigge, { data: activeMatch, isLoading: jkm, isError: bhjn }] =
    useActiveMatchMutation();

  const [matchName, setMatchName] = useState("second");
  const [activeSlide, setActiveSlide] = useState(false);
  const isBreakPoint = useMediaQuery("(max-width: 780px)");

  const nav = useNavigate();

  const handleGameDetailsPage = (id) => {
    nav(`/game_detail/${id}`);
  };

  return (
    <div
      className={isBreakPoint ? "sider-active" : "sider-container"}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="sider-container-ul">
        <li onClick={() => nav(multi_market)}>
          <p>
            <StarBorderIcon fontSize="medium" sx={{ color: "#ccc" }} />
            Favourite
          </p>
          <span>
            <img src={arrow} alt="" />
          </span>
        </li>
        {data?.data.map((item) => {
          return (
            <React.Fragment
              key={item.sportId + item.sportName + item.sportImage}
            >
              <li
                onClick={() => {
                  setMatchName(item?.sportName);
                  setActiveSlide(true);
                  trigge(item?.sportId);
                }}
              >
                <p>
                  {/* <img src={item?.sportImage} alt="cricket" /> */}
                  <img src={sportImages[item.sportName]} alt="" />

                  {item?.sportName}
                </p>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </li>
            </React.Fragment>
          );
        })}
        <Link to="casino">
          <li>
            <p>
              <img src={casino} alt="casino" />
              Int Casino
            </p>
            <span>
              <img src={arrow} alt="" />
            </span>
          </li>
        </Link>
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
                    <p onClick={() => handleGameDetailsPage(item?.matchId)}>
                      {item.matchName}
                    </p>
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
