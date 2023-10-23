import { Link, useNavigate } from "react-router-dom";
import "./SubHeader.scss";
import { useActiveSportQuery } from '../../Services/ActiveSportList/ActiveSportList';
import { useEffect, useState } from "react";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
import play from "../../assets/img/in-play.png";
import { casino } from "../../routes/PagesUrl";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCardIcon from "@mui/icons-material/AddCard";
const SubHeader = () => {
  const [activeTabs, setActiveTabs] = useState(0);
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
          {data?.data.map((items) => {
            return (
              <>
                <li>
                  <div
                    onClick={() =>
                      handleSportDetailsPage(items?.sportId, items.sportName)
                    }
                  >
                    {items.sportName}
                  </div>
                </li>
              </>
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
            {data?.data.map((items, index) => {
              return (
                <>
                  <li
                    onClick={() => {
                      setActiveTabs(index);
                      handleSportDetailsPage(items?.sportId, items.sportName);
                    }}
                    className={activeTabs == index ? "active-tabs" : ""}
                  >
                    <img src={play} alt="" />
                    <span>{items.sportName}</span>
                  </li>
                </>
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
          <div className="mobile-subheader-deposit-left-col">
            <AccountBalanceIcon />
            Deposit
          </div>
          <div className="mobile-subheader-deposit-right-col">
            <AddCardIcon />
            Withdraw
          </div>
        </div>
      </>
    );
  }
};

export default SubHeader;
