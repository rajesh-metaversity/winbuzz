import { Link, useNavigate } from "react-router-dom";
import "./SubHeader.scss";
import { useActiveSportQuery } from "../../Services/ActiveSportList/ActiveSportList";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
import play from "../../assets/img/in-play.png";
import { casino, deposit, home, withdraw } from "../../routes/PagesUrl";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCardIcon from "@mui/icons-material/AddCard";
export let sportName;
import { sportImages } from "../sider/Sider";
const SubHeader = () => {
  const [activeTabs, setActiveTabs] = useState(300);
  const [gameName, setGameName] = useState("");
  sportName = gameName;
  const { data } = useActiveSportQuery();
  const nav = useNavigate();

  const handleSportDetailsPage = (val, name) => {
    nav(`/game_list/${val}`, { state: name });
  };

  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  if (!isBreakPoint) {
    return (
      <div className="sub_header_cont">
        <ul className="sub_header_ul">
          {data?.data.map((items, index) => {
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
          <li>
            <Link to={casino}>Int Casino</Link>
          </li>
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
                setGameName("");
                setActiveTabs(300);
              }}
              className={activeTabs == 300 ? "active-tabs" : ""}
            >
              <img src={play} alt="" />

              <span>
                <Link to={home}>In play</Link>
              </span>
            </li>
            ;
            {data?.data.map((items, index) => {
              return (
                <React.Fragment key={items.sportId + items.sportName + index}>
                  <li
                    onClick={() => {
                      setGameName(items.sportName);
                      setActiveTabs(index);
                      handleSportDetailsPage(items?.sportId, items.sportName);
                    }}
                    className={activeTabs == index ? "active-tabs" : ""}
                  >
                    {/* <img src={play} alt="" /> */}
                    <img src={sportImages[items.sportName]} />
                    <span>{items.sportName}</span>
                  </li>
                </React.Fragment>
              );
            })}
            <li
              onClick={() => setActiveTabs(data?.data.length)}
              className={activeTabs == data?.data.length ? "active-tabs" : ""}
            >
              <img src={play} alt="" />
              <span>
                <Link to={casino}>Int Casino</Link>
              </span>
            </li>
          </ul>
        </div>
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
      </>
    );
  }
};

export default SubHeader;
