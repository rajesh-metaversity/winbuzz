import { TextField } from "@mui/material";
import sytled from "@mui/material/styles/styled";

export const MyTextField = sytled(TextField)({
  border: "none",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  //   padding: "10px 8px",
  transition: "0.9s",

  "& .MuiInputBase-input": {
    color: "white",
    width: "250px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    border: "1px solid white",
    height: "38px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
