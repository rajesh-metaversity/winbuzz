import { Grid } from "@mui/material";
import React, { useState } from "react";

import { GridContainer, P, PolygonStrip } from "./fancyBetStyled";
import FancyBetComp from "./FancyBetComp";
import Empty from "../../component/empty/Empty";
import "./FancyTabs.scss";

const FancyTabs = ({
  data,
  ip,
  prevOdds,
  setMinMax,
  minMax,
  fancyPnl,
  handleFavSec,
  favData,
  handleFavDel,
}) => {
  const [fancyData, setFancyData] = useState("All");
  const [activeValue, setActiveValue] = useState(0);
  const tabsVal = data ? Object.keys(data) : [];

  return (
    <>
      <GridContainer container props={"fancy"}>
        <Grid item xs={5} md={4}>
          <PolygonStrip>
            <P props={"fancyodds"}>Fancy</P>
          </PolygonStrip>
        </Grid>
        <Grid item xs={7} md={8}></Grid>
      </GridContainer>
      <ul className="fancy_tabs">
        <li
          className={activeValue === 0 && "active"}
          onClick={() => {
            setActiveValue(0);
            setFancyData("All");
          }}
        >
          All
        </li>
        {tabsVal?.map((curElm, index) => {
          if (
            curElm === "Fancy2" ||
            curElm === "Fancy3" ||
            curElm === "OddEven"
          ) {
            return (
              <React.Fragment key={curElm + index}>
                <li
                  className={activeValue === index && "active"}
                  onClick={() => {
                    setActiveValue(index);
                    setFancyData(curElm);
                  }}
                >
                  {curElm}
                </li>
              </React.Fragment>
            );
          }
        })}
      </ul>
      {data[fancyData]?.length ? (
        <FancyBetComp
          fancyItem={data[fancyData]}
          fancyData={fancyData}
          ip={ip}
          prevOdds={prevOdds[fancyData]}
          setMinMax={setMinMax}
          minMax={minMax}
          fancyPnl={fancyPnl}
          handleFavSec={handleFavSec}
          handleFavDel={handleFavDel}
          favData={favData}
        />
      ) : (
        <Empty />
      )}
      {/* <FancyBetComp /> */}
    </>
  );
};

export default FancyTabs;
