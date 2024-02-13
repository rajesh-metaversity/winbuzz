import React, { useEffect, useState } from "react";
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
import leaf from "../../assets/img/99999.svg";
import casino from "../../assets/int.svg";
import lottery from "../../assets/img/lottery.png";
import slots from "../../assets/img/slots.png";
import fantasygame from "../../assets/img/fantasy-game.png";

import { multi_market } from "../../routes/PagesUrl";
import { isLoginSelector } from "../../App/LoginSlice";
import { useSelector } from "react-redux";
import {  useAllotedCasinoQuery } from "../../Services/allotedCasino/AllotedCasino";
import { setLoginFormHandlerRef } from "../../common/MainLayout";
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

  const isLogin = useSelector(isLoginSelector);
  const  { data: allotedCasino } = useAllotedCasinoQuery({},{
    skip:!isLogin
  });

  const nav = useNavigate();

  const handleGameDetailsPage = (id, sportId) => {
    nav(`/game_detail/${id}/${sportId}`);
  };

  const [idSport, setIdSport] = useState(0);

  // useEffect(() => {
  //   if (isLogin) {
  //     trigger();
  //   }
  // }, []);

  const casinoList = [
    {
      name: "Lottery",
      img: lottery,
    },
    { name: "Live Casino", img: casino },
    { name: "Slot", img: slots },
    { name: "Fantasy Game", img: fantasygame },
  ];

  const filteredCasino = allotedCasino?.data?.filter(
    (item) => item?.name === "QTech" && item?.active
  );

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
                  // }
                }}
              >
                <p className="match-list">
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

        {/*  */}

        {/* {isLogin
          ? casinoList.map((item, index) => {
              let removeSpace = item.name.split(" ").join("");

              return (
                <Link to={`casino/${removeSpace}`} key={item + index}>
                  <li onClick={() => setSiderOpen(false)}>
                    <p>
                      <img src={item?.img} alt="casino" />
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
                    <img src={item?.img} alt="casino" />
                    {item.name}
                  </p>
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </li>
              );
            })} */}

        {filteredCasino?.length &&
          casinoList.map((item, index) => {
            let removeSpace = item.name.split(" ").join("");

            return (
              <Link to={`casino/${removeSpace}`} key={item + index}>
                <li onClick={() => setSiderOpen(false)}>
                  <p className="match-list">
                    <img src={item?.img} alt="casino" />
                    {item?.name}df
                  </p>
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </li>
              </Link>
            );
          })}

        {/* {!isLogin && casinoList?.map((item, index) => {
              return (
                <li key={item + index}>
                  <p onClick={() => handleOpen()}>
                    <img src={item?.img} alt="casino" />
                    {item?.name}
                  </p>
                  <span>
                    <img src={arrow} alt="" />
                  </span>
                </li>
              );
            }) } */}
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
                  <li
                    onClick={() => {
                      setSiderOpen(false);
                      if (isLogin) {
                        setActiveSlide(!activeSlide);
                      }
                    }}
                    className="nested-list"
                  >
                    <p
                      onClick={() => {
                        if (!isLogin) {
                          setLoginFormHandlerRef();
                        } else {
                          handleGameDetailsPage(item?.matchId, idSport);
                        }
                      }}
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
