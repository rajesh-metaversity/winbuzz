import React, { useEffect } from "react";
import InplayCollapse from "../inPlay/InplayCollapse";
import { useActiveMatchMutation } from "../../Services/ActiveSportList/ActiveMatch";
import { useLocation, useParams } from "react-router-dom";
import InPlayHeading from "../inPlay/InPlay";
import TopBanner from "../topBanner/TopBanner";

const SportData = () => {
  const { id } = useParams();

  const {state} = useLocation();

  const [trigger, { data }] = useActiveMatchMutation();

  useEffect(() => {
    trigger(id);
  }, [id]);

  console.log(data?.data, "sdssdsdsd")

  return (
    <>
    <TopBanner/>
      <InPlayHeading headName= {"EXCHANGE GAMES"}/>
      <InplayCollapse data={data?.data}  name = {state}/>
    </>
  );
};

export default SportData;
