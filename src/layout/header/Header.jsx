import InputAdornment from "@mui/material/InputAdornment";
import logo from "../../assets/img/logo.png";
import ButtonComponent from "../../component/button/Button";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AddCardIcon from "@mui/icons-material/AddCard";
import LoginForm from "../../component/loginForm/LoginForm";
import ModalComponent from "../../component/modal/Modal";
///styles
import "./styles.scss";
import { MyTextField } from "./styled";
import React, { useState } from "react";
import SubHeader from "./SubHeader";
const HeaderComponent = () => {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <ModalComponent Elememt={<LoginForm />} open={open} setOpen={setOpen} />
      <div className="header-container">
        <div className="header-left-col">
          <img src={logo} alt="" />
        </div>
        <div className="header-right-col">
          <ul>
            <li>
              <ButtonComponent name={"Deposit"} icon={<AccountBalanceIcon />} />
            </li>
            <ButtonComponent name="Withdraw" icon={<AddCardIcon />} />
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
            <li>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Demo123</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>Without label</FormHelperText> */}
              </FormControl>
              {/* <ArrowDropDownIcon /> */}
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li onClick={() => handleOpen()}>login</li>
          </ul>
        </div>
      </div>
      <SubHeader />
    </>
  );
};
export default HeaderComponent;