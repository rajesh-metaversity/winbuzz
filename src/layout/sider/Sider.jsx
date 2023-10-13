import { useState } from "react";
import cricket from "../../assets/img/cricket.svg";
import football from "../../assets/img/football.svg";
import arrow from "../../assets/img/rightArrow.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
///styles
import "./styles.scss";
const SiderBar = () => {
  const siderList = [
    {
      name: "Cricket",
      icon: cricket,
      matchname: "New Zealand v bangladesh",
    },
    {
      name: "Football",
      icon: football,
      matchname: "India v Pakistan",
    },
    {
      name: "Tennis",
      icon: "",
      matchname: "Australia v Sri Lanka",
    },
    {
      name: "Horse Racing",
      icon: "",
    },
    {
      name: "Grayhound Racing",
      icon: "Kabadi",
    },
    {
      name: "Politics",
      icon: "",
    },
    {
      name: "Casino",
      icon: "",
    },
    {
      name: "Sport book",
      icon: "",
    },
    {
      name: "Int Casino",
      icon: "",
    },
    {
      name: "Binary",
      icon: "",
    },
  ];
  const [matchName, setMatchName] = useState("second");
  const [activeSlide, setActiveSlide] = useState(false);
  return (
    <div className="sider-container">
      <ul className="sider-container-ul">
        {siderList.map((item) => {
          return (
            <>
              <li
                onClick={() => {
                  setMatchName(item.name);
                  setActiveSlide(true);
                }}
              >
                <p>
                  <img src={item.icon} alt="cricket" />
                  {item.name}
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
          {siderList.map((item) => {
            if (item.matchname) {
              return (
                <>
                  <li onClick={() => setActiveSlide(true)}>
                    <p>{item.matchname}</p>
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
