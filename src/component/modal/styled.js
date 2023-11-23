// import styled from "@emotion/styled";
import { styled } from "@mui/material";
import { Dialog } from "@mui/material";

export const StyledDialouge = styled(Dialog)(({ props, theme }) => ({
  "& .MuiDialog-paper": {
    width: props || "auto",
  },
  [theme.breakpoints.down(780)]: {
    "& .MuiDialog-container": {
      alignItems: "start",
    },
    "& .MuiPaper-root": {
      margin: "0",
      maxWidth: "auto",

      width: "100%",
      maxHeight: "calc(100% - 0px)",
      // height: '100%',
      background: "transparent",
    },
  },
}));

// export const StyledDialouge = styled(Dialog)(
//   `
// @media screen and (max-width: 780px) {
//     "& .MuiPaper-root": {
//       margin: "0",
//       maxWidth: "auto",
//       width: "100%",
//       maxHeight: "calc(100% - 0px)",
//       height: "100%",
//     },
//   }`,
//   {
//     // "& .MuiPaper-root": {
//     //   margin: "0",
//     //   maxWidth: "auto",
//     //   width: "100%",
//     //   maxHeight: "calc(100% - 0px)",
//     //   height: "100%",
//     // },
//   }
// );
