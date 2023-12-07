import React, { useState } from "react";
import arrow from "../../assets/img/rightArrow.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import leaf from "../../assets/img/99999.svg";
import lottery from "../../assets/img/lottery.png";
import slots from "../../assets/img/slots.png";
import fantasygame from "../../assets/img/fantasy-game.png";

import { multi_market } from "../../routes/PagesUrl";
import { isLoginSelector } from "../../App/LoginSlice";
import { useSelector } from "react-redux";
export const sportImages = {
  Cricket: cricketImage,
  Tennis: tennisImage,
  Football: footballImage,
  "Horse racing": horseRidingImage,
  Kabaddi: kabaddiImage,
};

const SiderBar = ({ handleOpen, setSiderOpen }) => {
  const { data, isLoading, isError } = useActiveSportQuery();
  const [trigge, { data: activeMatch, isLoading: jkm, isError: bhjn }] =
    useActiveMatchMutation();
  const [matchName, setMatchName] = useState("second");
  const [activeSlide, setActiveSlide] = useState(false);
  const isBreakPoint = useMediaQuery("(max-width: 780px)");

  const nav = useNavigate();

  const handleGameDetailsPage = (id, sportId) => {
    nav(`/game_detail/${id}/${sportId}`);
  };
  const isLogin = useSelector(isLoginSelector);

  const [idSport, setIdSport] = useState(0);
  const casinoList = [
    {
      name: "Lottery",
      img: lottery,
    },
    { name: "Live Casino", img: casino },
    { name: "Slot", img: slots },
    { name: "Fantasy Game", img: fantasygame },
  ];

  return (
    <div
      className={isBreakPoint ? "sider-active" : "sider-container"}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="sider-container-ul">
        {isLogin && (
          <li onClick={() => nav(multi_market)}>
            <p>
              <StarBorderIcon fontSize="medium" sx={{ color: "#ccc" }} />
              Favourite
            </p>
            <span>
              <img src={arrow} alt="" />
            </span>
          </li>
        )}

        {data?.data.map((item) => {
          return (
            <React.Fragment
              key={item.sportId + item.sportName + item.sportImage}
            >
              <li
                onClick={() => {
                  setMatchName(item?.sportName);
                  setIdSport(item?.sportId);
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
        {isLogin
          ? casinoList.map((item, index) => {
              let removeSpace = item.name.split(" ").join("");

              return (
                <Link to={`casino/${removeSpace}`} key={item + index}>
                  <li>
                    <p>
                      <img src={item.img} alt="casino" />
                      {item?.name}
                    </p>
                    <span>
                      <img src={arrow} alt="" />
                    </span>
                  </li>
                </Link>
              );
            })
          : casinoList.map((item, index) => {
              return (
                <li key={item + index}>
                  <p onClick={() => handleOpen()}>
                    <img src={item.img} alt="casino" />
                    {item.name}
                  </p>
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </li>
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
                  <li onClick={() => {
                    setSiderOpen(false)
                    setActiveSlide(!activeSlide)
                  }}>
                    <p
                      onClick={() => {
                        handleGameDetailsPage(item?.matchId, idSport)
                      }
                      }
                    >
                      {/* Matches */}
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
