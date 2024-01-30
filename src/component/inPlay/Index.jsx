import React from "react";
import { useInPlayQuery } from "../../Services/ActiveSportList/ActiveMatch";
import InPlayHeading from "./InPlay";
import InplayCollapse from "./InplayCollapse";
///styles
import "./styles.scss";
const Inplay = () => {
  const { data } = useInPlayQuery();

  return (
    <React.Fragment>
      <InPlayHeading headName={"IN PLAY"} />
      {data?.data?.map((res) => {
        if (res?.matchList?.length == 0) return <></>;
        return (
          <React.Fragment key={res?.name + res?.sportid}>
            <InplayCollapse
              name={res?.name}
              data={res?.matchList}
              sportid={res.sportid}
            />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Inplay;
