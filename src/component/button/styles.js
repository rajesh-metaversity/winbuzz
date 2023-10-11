import Button from "@mui/material/Button";
import sytled from "@mui/material/styles/styled";

export const MyButton = sytled(Button)(
  `&:hover {
        background: green;
      }`,
  {
    border: "none",
    background: "green",
    color: "#fff",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    padding: "10px 8px",
    borderRadius: "3px",
    transition: "0.9s",
  }
);
