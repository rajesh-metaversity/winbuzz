import { useEffect } from "react";
import { useActiveMatchMutation, useInPlayQuery } from "../../Services/ActiveSportList/ActiveMatch";
import InPlayHeading from "./InPlay";
import InplayCollapse from "./InplayCollapse";
///styles
import "./styles.scss";
const Inplay = () => {
  const { data } = useInPlayQuery();
  
  // console.log("dataID", data)

  return (
    <>
      <InPlayHeading headName = {"IN PLAY"} />
      {data?.data?.map((res) => {
        if(res?.matchList?.length == 0) return <></>
        return (
          <>
            <InplayCollapse name={res?.name} data={res?.matchList}/>
          </>
        );
      })}
    </>
  );
};

export default Inplay;
