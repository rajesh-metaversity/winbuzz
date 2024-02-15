import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab, { tabClasses } from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BetsSports from "./BetsSports";
import BetsCasino from "./BetsCasino";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BetsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} xs={{ padding: "0" }} className="tabs-t">
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="exposure-tabs"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          //   indicatorColor="secondary"
          //   textColor="secondary"
          TabIndicatorProps={{
            sx: {
              //   sm: {

              backgroundColor: { xs: "white", md: "primary.main" },
              color: { xs: "white" },
              //   },
            },
          }}
          //   indicatorColor=
          //   sx={{
          //     color: "white",
          //     [`&.${i}`]: { color: "white" },
          //   }}
        >
          <Tab
            label="Sport"
            {...a11yProps(0)}
            sx={{
              //   xs: {
              color: { xs: "white", md: "primary.main" },
              [`&.${tabClasses.selected}`]: {
                color: { xs: "white", md: "primary.main" },
              },
              //   },
            }}
          />
          <Tab
            label="Casino"
            {...a11yProps(1)}
            sx={{
              //   xs: {
              color: { xs: "white", md: "primary.main" },
              [`&.${tabClasses.selected}`]: {
                color: { xs: "white", md: "primary.main" },
              },
              //   },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BetsSports />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BetsCasino />
      </CustomTabPanel>
    </Box>
  );
}
