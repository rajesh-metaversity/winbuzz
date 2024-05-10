///styles
import "./styles.js";
import { MyButton } from "./styles.js";
const ButtonComponent = ({ name, icon,bg,clr }) => {
  return (
    <MyButton
      className="btn"
      variant="contained"
        sx={{ background: bg ,color:clr}}
    >
      {icon}
      {name}
    </MyButton>
  );
};

export default ButtonComponent;
