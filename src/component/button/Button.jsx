///styles
import "./styles.js";
import { MyButton } from "./styles.js";
const ButtonComponent = ({ name, icon,bg }) => {
  return (
    <MyButton
      className="btn"
      variant="contained"
        sx={{ background: bg }}
    >
      {icon}
      {name}
    </MyButton>
  );
};

export default ButtonComponent;
