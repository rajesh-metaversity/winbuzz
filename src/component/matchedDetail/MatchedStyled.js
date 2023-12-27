import { Box, Grid, Typography } from "@mui/material";
import styled from "@mui/material/styles/styled";

export const polygonVal = "polygon(0px 0px, 76% 0%, 85% 100%, 0% 100%)";
export const skewVal = "skew(43deg)";

export const MainDiv = styled(Box)({
  marginTop: "10px",
});

export const PolygonStrip = styled(Box)(({ props, theme }) => ({
  width: "100%",
  background: "linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)",
  clipPath: polygonVal,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  position: "relative",
  minWidth: "200px",
  [theme.breakpoints.up("md")]: {
    "&::after": {
      content: '""',
      width: "32px",
      height: "32px",
      background: "linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)",
      position: "absolute",
      right: "54px",
      top: "0px",
      transform: skewVal,
      "z-index": "999999999",
    },
  },
}));

export const GridContainer = styled(Grid)(({ props }) => ({
  backgroundColor: props === "betgrid" ? "#ffffff" : "#f1f1f1",
  borderBottom: props === "betgrid" ? "1px solid rgb(128 128 128 / 14%)" : 0,
  boxShadow:
    props === "betgrid"
      ? "rgb(0 0 0 / 5%) -2px 3px 6px, rgb(0 0 0 / 12%) 1px 1px 3px"
      : "none",
  borderRadius: props === "betgrid" ? "0px 0px 5px 5px" : 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: props === "betgrid" ? "0px 0px" : 0,
}));

export const P = styled("p")(({ props }) => ({
  "max-width": "200px",
  "min-width": "200px",
  textTransform: props === "left" ? "capitalize" : "uppercase",
  color:
    props === "back"
      ? "#0375cc"
      : props === "lay"
      ? "#e03c3c"
      : props === "matchodds"
      ? "#fff"
      : "",
  fontSize: props === "minmax" ? "10px" : "12px",
  fontWeight: 600,
  margin: props === "matchodds" ? "auto 0 auto 0px" : 0,
  textAlign: props === "left" ? "left" : "center",
  padding:
    props === "matchodds"
      ? "6px 2px 6px 10px"
      : props === "left"
      ? "0px 0px 0px 8.35938px"
      : 0,
}));

export const BetTypoPara = styled(Typography)(({ props }) => ({
  textAlign: "center",
  fontSize: props === "fancyp" ? "10px" : "12px",
  margin: "auto 0",
}));

export const BetTypoSpan = styled(Typography)(({ props }) => ({
  fontSize: props === "fancyp" ? "10px" : "9px",
  textAlign: "center",
  margin: "auto 0",
}));

export const BackGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    ".backgrid_": {
      display: "block",
    },
  },

  // backgroundColor: '#A5D9FE',
  padding: " 4px 0px",
  minHeight: "35px",
  borderRadius: "2px",
  ".backgrid_": {
    display: "none",
  },
}));

export const LayGrid = styled(Grid)({
  // backgroundColor: '#F8D0CE',
  padding: "4px 0px",
  minHeight: "35px",
  width: "33.3333%",
  borderRadius: "2px",
});
