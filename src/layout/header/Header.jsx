import { useState } from "react";
import logo from "../../assets/img/logo.png";
import ButtonComponent from "../../component/button/Button";
import ModalComponent from "../../component/modal/Modal";
///styles
import "./styles.scss";
import LoginForm from "../../component/loginForm/LoginForm";
const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  


  return (
    <>
    <ModalComponent Elememt={<LoginForm/>} open={open}  setOpen={setOpen}/>
    <div className="header-container">
      <div className="header-left-col">
        <img src={logo} alt="" />
      </div>
      <div className="header-right-col">
        <ul>
          <li>
            <ButtonComponent name="Deposit" icon="asd" />
          </li>
          <ButtonComponent name="Withdraw" icon="adsf" />
          <li className="header-rule">Rules</li>
          <li></li>
          <li></li>
          <li></li>
          <li onClick={()=>handleOpen()}>login</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default HeaderComponent;
