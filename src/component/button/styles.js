import Button from "@mui/material/Button";
import sytled from "@mui/material/styles/styled";

export const MyButton = sytled(Button)(
  `&:hover {
        background: green;
      }`,
  {
    border: "none",
    color: "#fff",
    display: "flex",
    gap: "5px",
    textTransform: "uppercase",
    alignItems: "center",
    padding: "5px 6px",
    borderRadius: "3px",
    transition: "0.9s",
  }
);
