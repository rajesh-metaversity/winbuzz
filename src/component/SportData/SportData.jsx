import { useEffect, useState } from "react";
import InplayCollapse from "../inPlay/InplayCollapse";
import { useActiveMatchMutation } from "../../Services/ActiveSportList/ActiveMatch";
import { useLocation, useParams } from "react-router-dom";
import InPlayHeading from "../inPlay/InPlay";
import { sportName } from "../../layout/header/SubHeader";
import Loader from "../Loader/Loader";

const SportData = () => {

  const { id } = useParams();

  const { state } = useLocation();

  const [trigger, { data, isLoading, isError }] = useActiveMatchMutation();
  
  console.log(isLoading, "isLOADING")


  useEffect(() => {
    trigger(id || 4);
  }, [id]);

  if (isLoading) {
    return <Loader />
  }
  
  else {

  
    return (
      <>
        <InPlayHeading headName={sportName || "EXCHANGE GAMES"} />
        <InplayCollapse
          data={data?.data}
          name={state}
     
        />
      </>
    )
  }
};

export default SportData;
