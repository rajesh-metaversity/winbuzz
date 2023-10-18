import { Link, useNavigate } from "react-router-dom";
import "./SubHeader.scss";
import { casino } from "../../routes/PagesUrl";
import { useActiveSportMutation } from "../../Services/ActiveSportList/ActiveSportList";
import { useEffect, useState } from "react";

const SubHeader = () => {
  const [trigger, { data }] = useActiveSportMutation();
  const nav = useNavigate();

  useEffect(() => {
    trigger();
  }, []);


  // const listArray = [
  //   {
  //     name: "Cricket",
  //     url: "",
  //   },
  //   {
  //     name: "Football",
  //     url: "",
  //   },
  //   {
  //     name: "Tennis",
  //     url: "",
  //   },
  //   {
  //     name: "Horse Racing",
  //     url: "",
  //   },
  //   {
  //     name: "GreyHound Racing",
  //     url: "",
  //   },
  //   {
  //     name: "Kabaddi",
  //     url: "",
  //   },
  //   {
  //     name: "Politics",
  //     url: "",
  //   },
  //   {
  //     name: "Casino",
  //     url: "",
  //   },

  //   {
  //     name: "Sports Book",
  //     url: "",
  //   },
  // {
  //   name: "Int Casino",
  //   url: casino,
  // },
  //   {
  //     name: "Binary",
  //     url: "",
  //   },
  // ];

  const handleSportDetailsPage = (val, name)=>{
    nav(`/game_detail/${val}`, {state:name})
  }

  return (
    <div className="sub_header_cont">
      <ul className="sub_header_ul">
        {data?.data.map((items) => {
          return (
            <>
              <li>
                <div onClick={()=>handleSportDetailsPage(items?.sportId, items.sportName)} >{items.sportName}</div>
              </li>
            </>
          );
        })}
        <li>
          <Link to="casino">Int Casino</Link  >
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
