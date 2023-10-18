import InputAdornment from "@mui/material/InputAdornment";
import logo from "../../assets/img/logo.png";
import ButtonComponent from "../../component/button/Button";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import AddCardIcon from "@mui/icons-material/AddCard";
import LoginForm from "../../component/loginForm/LoginForm";
import ModalComponent from "../../component/modal/Modal";
import PersonIcon from "@mui/icons-material/Person";
///styles
import "./styles.scss";
import { MyTextField } from "./styled";
import { useState } from "react";
import UserDetailDropDown from "../../component/userDetailDropDown/UserDetailDropDown";

import SubHeader from "./SubHeader";
import { Link } from "react-router-dom";
import RulesModal from "../../component/RulesModal/RulesModal";
import { home } from "../../routes/PagesUrl";
import { isLoginSelector } from "../../App/LoginSlice";
import { useSelector } from "react-redux";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export const WebHeaderComponent = ({ setSiderOpen, siderOpen }) => {
  const loginCheck = useSelector(isLoginSelector);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("hui2");

    setOpen(true);
  };
  const [modalValue, setModalValue] = useState(0);
  const modalElement = {
    0: <LoginForm setOpen={setOpen} />,
    1: <RulesModal setOpen={setOpen} />,
  };
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  if (!isBreakPoint) {
    return (
      <>
        <ModalComponent
          Elememt={modalElement[modalValue]}
          open={open}
          setOpen={setOpen}
        />
        <div className="header-container">
          <div className="header-left-col">
            <Link to={home}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header-right-col">
            <ul>
              {!loginCheck ? (
                <>
                  <li
                    className="header-rule"
                    onClick={() => {
                      setModalValue(1);
                      handleOpen();
                    }}
                  >
                    Rules
                  </li>
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
                  <li
                    onClick={() => {
                      setModalValue(0);
                      handleOpen();
                    }}
                    className="header-login"
                  >
                    login
                  </li>
                  <Link to="/sign-up">
                    <li className="header-register">Register</li>
                  </Link>
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
                  <li
                    className="header-rule"
                    onClick={() => {
                      setModalValue(1);
                      handleOpen();
                    }}
                  >
                    Rules
                  </li>
                  <li>
                    <MyTextField
                      hiddenLabel
                      variant="outlined"
                      size="small"
                      placeholder="Search Events"
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
                    <UserDetailDropDown name="Demo1" />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <SubHeader />
      </>
    );
  } else {
    return (
      <>
        <ModalComponent
          Elememt={modalElement[modalValue]}
          open={open}
          setOpen={setOpen}
        />
        <div className="mobile-header-container">
          <div className="mobile-header-left-col">
            {siderOpen ? (
              <CloseIcon onClick={() => setSiderOpen(!siderOpen)} />
            ) : (
              <MenuIcon onClick={() => setSiderOpen(!siderOpen)} />
            )}

            <Link to={home}>
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* <div className="mobile-header-middle-col">
            <SearchIcon />
          </div> */}
          <div className="mobile-header-right-col">
            {loginCheck ? (
              <>
                <SearchIcon />
                <li className="header-balance">
                  Bal:0.29
                  <span>Exp:0</span>
                </li>
                <span className="user">
                  <UserDetailDropDown name={<PersonIcon />} />
                </span>
              </>
            ) : (
              <>
                <SearchIcon />
                <span
                  onClick={() => {
                    setModalValue(0);
                    handleOpen();
                    console.log("hui");
                  }}
                  style={{ color: "white" }}
                >
                  <ButtonComponent name="Login" bg="#b88831" clr="white" />
                </span>
                <Link to="/sign-up">
                  <ButtonComponent name="Register" bg="white" clr="#b88831" />
                </Link>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
};

// export const MobileHeader = () => {
//   return <>lknlk</>;
// };
