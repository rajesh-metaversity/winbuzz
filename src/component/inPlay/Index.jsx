import { useEffect } from "react";
import { useActiveMatchMutation, useInPlayQuery } from "../../Services/ActiveSportList/ActiveMatch";
import InPlayHeading from "./InPlay";
import InplayCollapse from "./InplayCollapse";
///styles
import "./styles.scss";
const Inplay = () => {
  const {data} = useInPlayQuery();




  return (
    <>
      <InPlayHeading headName = {"IN PLAY"} />
      {data?.data?.map((res) => {
        console.log(res, "Dasdsd")
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
