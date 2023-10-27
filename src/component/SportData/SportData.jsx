import { useEffect, useState } from "react";
import InplayCollapse from "../inPlay/InplayCollapse";
import { useActiveMatchMutation } from "../../Services/ActiveSportList/ActiveMatch";
import { useLocation, useParams } from "react-router-dom";
import InPlayHeading from "../inPlay/InPlay";
import { sportName } from "../../layout/header/SubHeader";

const SportData = () => {

  const { id } = useParams();

  const { state } = useLocation();

  const [trigger, { data }] = useActiveMatchMutation();

  useEffect(() => {
    trigger(id || 4);
  }, [id]);

  return (
    <>
      <InPlayHeading headName={sportName || "EXCHANGE GAMES"} />
      <InplayCollapse 
        data={data?.data}
        name={state}
     
      />
    </>
  );
};

export default SportData;
