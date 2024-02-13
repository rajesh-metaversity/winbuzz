import { Link, useNavigate, useParams } from "react-router-dom";
import "./SubHeader.scss";
import { useActiveSportQuery } from "../../Services/ActiveSportList/ActiveSportList";
import React, { useEffect, useMemo } from "react";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
import play from "../../assets/img/in-play.png";
import { InPlay, deposit, home, withdraw } from "../../routes/PagesUrl";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useAllotedCasinoQuery } from "../../Services/allotedCasino/AllotedCasino";
import { sportImages } from "../sider/Sider";
import { useSelector } from "react-redux";
import { isLoginSelector } from "../../App/LoginSlice";
import casinos from "../../assets/int.svg";
import lottery from "../../assets/img/lottery.png";
import slots from "../../assets/img/slots.png";
import fantasygame from "../../assets/img/fantasy-game.png";

const SubHeader = ({ setModalValue, handleOpen, selfAllowed }) => {
  const { data } = useActiveSportQuery();
  const nav = useNavigate();

  const handleSportDetailsPage = (val, name) => {
    nav(`/game_list/${val}`, { state: name });
  };
  const { id } = useParams();
  const pathName = window.location.pathname;
  const isLogin = useSelector(isLoginSelector);
  const isBreakPoint = useMediaQuery("(max-width: 780px)");

  const userType = localStorage.getItem("userTypeInfo");
  // const casinoList = ["Lottery", "Live Casino", "Slot", "Fantasy Game"];
  const { data: allotedCasino } = useAllotedCasinoQuery(
    {},
    {
      skip: !isLogin,
    }
  );
  let splitPathName = pathName.split("/");

  // useEffect(() => {
  //   if (isLogin) {
  //     trigger();
  //   }
  // }, []);

  const casinoList = useMemo(
    () => [
      {
        name: "Lottery",
        img: lottery,
        active: allotedCasino?.data?.find((item) => item.casinoId == 3).active,
      },
      {
        name: "Live Casino",
        img: casinos,
        active: allotedCasino?.data?.find((item) => item.casinoId == 3).active,
      },
      {
        name: "Slot",
        img: slots,
        active: allotedCasino?.data?.find((item) => item.casinoId == 3).active,
      },
      {
        name: "Fantasy Game",
        img: fantasygame,
        active: allotedCasino?.data?.find((item) => item.casinoId == 3).active,
      },
    ],
    [allotedCasino]
  );

  if (!isBreakPoint) {
    return (
      <div className="sub_header_cont">
        <ul className="sub_header_ul">
          <li
            onClick={() => {
              nav(InPlay);
            }}
            className={pathName == "/in-play" ? "active-tabs" : ""}
          >
            <div>
              <Link to={home}>In play</Link>
            </div>
          </li>
          {data?.data?.map((items, index) => {
            return (
              <React.Fragment key={items?.sportId + items.sportName + index}>
                <li>
                  <div
                    onClick={() =>
                      handleSportDetailsPage(items?.sportId, items.sportName)
                    }
                  >
                    {items.sportName}
                  </div>
                </li>
              </React.Fragment>
            );
          })}
          <li
            onClick={() => {
              if (isLogin) {
                nav("casino/Indian-Casino");
              } else {
                setModalValue(0), handleOpen();
              }
            }}
          >
            Int Casino
          </li>
          {isLogin
            ? casinoList?.map((item, index) => {
                let removeSpace = item.name.split(" ").join("");
                if (item?.active) {
                  return (
                    <li key={item + index}>
                      <Link
                        to={`casino/${removeSpace}`}
                        style={{ color: "#fffa00" }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                } else {
                  return;
                }
              })
            : casinoList?.map((item, index) => {
                return (
                  <li
                    key={item + index}
                    style={{ color: "#fffa00" }}
                    onClick={() => {
                      setModalValue(0), handleOpen();
                    }}
                  >
                    {item?.name}
                  </li>
                );
              })}
        </ul>
      </div>
    );
  } else {
    return (
      <>
        <div className="mobile-sub-header-container">
          <ul>
            <li
              onClick={() => {
                nav(InPlay);
              }}
              className={pathName == "/in-play" ? "active-tabs" : ""}
            >
              <img src={play} alt="" />

              <span>
                <Link to={home}>In play</Link>
              </span>
            </li>

            {data?.data?.map((items, index) => {
              return (
                <React.Fragment key={items.sportId + items.sportName + index}>
                  <li
                    onClick={() => {
                      nav(`/game_list/${items.sportId}`);
                      handleSportDetailsPage(items?.sportId, items.sportName);
                    }}
                    className={id == items.sportId ? "active-tabs" : ""}
                  >
                    {/* <img src={play} alt="" /> */}
                    <img src={sportImages[items.sportName]} />
                    {/* sports Name */}
                    <span>{items.sportName}</span>
                  </li>
                </React.Fragment>
              );
            })}
            <li
              onClick={() => {
                if (isLogin) {
                  nav("casino/Indian-Casino");
                } else {
                  setModalValue(0), handleOpen();
                }
              }}
              className={pathName == "/in-play" ? "active-tabs" : ""}
            >
              <img src={play} alt="" />

              <span>Int Casino</span>
            </li>
            {isLogin
              ? casinoList.map((item, index) => {
                  let removeSpace = item.name.split(" ").join("");
                  return (
                    <li
                      onClick={() => nav("/casino/" + removeSpace)}
                      key={item + index}
                      className={pathName == "/casino" ? "active-tabs" : ""}
                    >
                      <img src={item?.img} alt="" />
                      {/* CASINO NAMES */}
                      <span>
                        <Link to={`/casino/${removeSpace}`}>{item?.name}</Link>
                      </span>
                    </li>
                  );
                })
              : casinoList.map((item, index) => {
                  return (
                    <li
                      className={pathName == "/casino" ? "active-tabs" : ""}
                      onClick={() => {
                        setModalValue(0), handleOpen();
                      }}
                      key={item + index}
                    >
                      <img src={item?.img} alt="" />
                      <span>{item?.name}</span>
                    </li>
                  );
                })}
          </ul>
        </div>
        {selfAllowed?.selfAllowed ? (
          // ? splitPathName[1] != "game_detail"
          // ? isLogin && (
          <div className="mobile-subheader-deposit">
            <Link to={deposit}>
              <div className="mobile-subheader-deposit-left-col">
                <AccountBalanceIcon />
                Deposit
              </div>
            </Link>
            <Link to={withdraw}>
              <div className="mobile-subheader-deposit-right-col">
                <AddCardIcon />
                Withdraw
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}
        {/* {} */}
      </>
    );
  }
};

export default SubHeader;
