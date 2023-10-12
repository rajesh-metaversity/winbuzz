import InputAdornment from "@mui/material/InputAdornment";
import logo from "../../assets/img/logo.png";
import ButtonComponent from "../../component/button/Button";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import AddCardIcon from "@mui/icons-material/AddCard";
import LoginForm from "../../component/loginForm/LoginForm";
import ModalComponent from "../../component/modal/Modal";
///styles
import "./styles.scss";
import { MyTextField } from "./styled";
import { useState } from "react";
import UserDetailDropDown from "../../component/userDetailDropDown/UserDetailDropDown";

import SubHeader from "./SubHeader";
const HeaderComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <ModalComponent Elememt={<LoginForm />} open={open} setOpen={setOpen} />
      <div className="header-container">
        <div className="header-left-col">
          <img src={logo} alt="" />
        </div>
        <div className="header-right-col">
          <ul>
            {!isLogin ? (
              <>
                <li className="header-rule">Rules</li>
                <li>
                  <MyTextField
                    hiddenLabel
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </li>
                <li onClick={() => handleOpen()} className="header-login">
                  login
                </li>
                <li className="header-register">Register</li>
              </>
            ) : (
              <>
                <li>
                  <ButtonComponent
                    name={"Deposit"}
                    icon={<AccountBalanceIcon />}
                    bg={"green"}
                  />
                </li>
                <ButtonComponent
                  name="Withdraw"
                  icon={<AddCardIcon />}
                  bg={"red"}
                />
                <li className="header-rule">Rules</li>
                <li>
                  <MyTextField
                    hiddenLabel
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </li>
                <li className="header-balance">
                  Bal:0.29
                  <span>Exp:0</span>
                </li>
                <li className="header-user-name" id="basic-menu">
                  <UserDetailDropDown />
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <SubHeader />
    </>
  );
};
export default HeaderComponent;
