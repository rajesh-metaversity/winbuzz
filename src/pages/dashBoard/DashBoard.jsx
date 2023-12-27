// import React from "react";
import SportData from "../../component/SportData/SportData";
import AllProviderName from "../../component/allCasino";
import Inplay from "../../component/inPlay/Index";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";

const DashBoard = () => {
  const isBreakPoint = useMediaQuery("(max-width: 780px)");

  return (
    <div>
      {/* {!isBreakPoint && <TopBanner />} */}

      <Inplay />
      {isBreakPoint && (
        <>
          {/* <SiderBanner /> */}
          <AllProviderName />
          <SportData />
        </>
      )}
    </div>
  );
};

export default DashBoard;
