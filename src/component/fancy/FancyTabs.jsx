import { Box } from "@mui/material";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { CustomTab } from "./fancyBetStyled";
import FancyBetComp from "./FancyBetComp";
import './FancyTabs.scss'

const FancyTabs = ({ data }) => {
  const [value, setValue] = useState(0);
  const [fancyData, setFancyData] = useState("All");
  const [activeValue, setActiveValue] = useState(0);

  const tabsVal = data ? Object.keys(data) : [];

  console.log(tabsVal, "ASDadasd");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(fancyData, "sdfsdfs");

  return (
    <>
      <Box>
        <ul className="fancy_tabs">
          <li
            className={activeValue === 0 && "active"}
            onClick={() => {
              setActiveValue(0);
              setFancyData("All");
            }}>
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
                    }}>
                    {curElm}
                  </li>
                </React.Fragment>
              );
            }
          })}
        </ul>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            display: "flex",
            alignItems: "center",
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}>
          <CustomTab label="all" />
        </Tabs>
      </Box>
      <FancyBetComp />
    </>
  );
};

export default FancyTabs;
