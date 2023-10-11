///styles
import "./styles.js";
import { MyButton } from "./styles.js";
const ButtonComponent = ({ name, icon }) => {
  return (
    <MyButton
      className="btn"
      variant="contained"
      //   sx={{ background: "green", "&:hover": { background: "black" } }}
    >
      {icon}
      {name}
    </MyButton>
  );
};

export default ButtonComponent;
