import React from "react";
import { useInPlayQuery } from "../../Services/ActiveSportList/ActiveMatch";
import InPlayHeading from "./InPlay";
import InplayCollapse from "./InplayCollapse";
///styles
import "./styles.scss";
import Loader from "../Loader/Loader";
const Inplay = () => {
  const { data, isLoading } = useInPlayQuery();

  return (
    <React.Fragment>
      <InPlayHeading headName={"IN PLAY"} />
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        data?.data?.map((res) => {
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
        })
      )}
    </React.Fragment>
  );
};

export default Inplay;
