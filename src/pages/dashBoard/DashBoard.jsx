// import React from "react";
import { SiderBanner } from "../../component/SiderBanner/SiderBanner";
import SportData from "../../component/SportData/SportData";
import Inplay from "../../component/inPlay/Index";
import TopBanner from "../../component/topBanner/TopBanner";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";

const DashBoard = () => {
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  return (
		<div>
			<Inplay />
			{isBreakPoint && (
				<>
					<SiderBanner />
					<SportData />
				</>
			)}
		</div>
  );
};

export default DashBoard;
