import styled from "@emotion/styled";
import { Menu } from "@mui/material";

export const StyledMenu = styled(Menu)({
  //   top: "10px",
  position: "relative",
  "&::after": {
    content: '""',
    height: "30px",
    width: "30px",
    top: 0,
    backgroundColor: "#ffffff",
  },
});
