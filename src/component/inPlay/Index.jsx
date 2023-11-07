import React, { useEffect } from "react";
import {
  useInPlayQuery,
} from "../../Services/ActiveSportList/ActiveMatch";
import InPlayHeading from "./InPlay";
import InplayCollapse from "./InplayCollapse";
///styles
import "./styles.scss";
const Inplay = () => {
  const { data } = useInPlayQuery();

  console.log(data, "data")

  

  return (
    <>
      <InPlayHeading headName={"IN PLAY"} />
      {data?.data?.map((res) => {
        if (res?.matchList?.length == 0) return <></>;
        return (
          <React.Fragment key={res?.matchList + res?.name}>
            <InplayCollapse name={res?.name} data={res?.matchList} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Inplay;
