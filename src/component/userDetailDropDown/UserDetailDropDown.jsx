import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import List from "./list";
const UserDetailDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "black" }}
      >
        Demo <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ul className="ul-drop-user">
          <li>
            <List name="Wallet Amount" bot="(Inclusive bonus)" value="0.29" />
          </li>
          <li>
            <List name="Net Exposure" bot="" value="0.9" />
          </li>
          <li>
            <List name="Bonus" bot="" value="0.10" />
          </li>
          <li>
            <List name="Available Withdrawal" bot="" value="0.29" />
          </li>
          <li> </li>
          <li></li>
          <li className="list-bottom-border">My Bets</li>
          <li className="list-bottom-border"> Betting Profit and Loss</li>
          <li className="list-bottom-border">Account Statement</li>
          <li className="list-bottom-border">Market Analysis</li>
          <li className="list-bottom-border">Change Password</li>
          <li className="list-bottom-border">Bonus Rules</li>
          <li className="logout-li">
            Logout
            <ExitToAppIcon />
          </li>
        </ul>
        {/* <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </>
  );
};

export default UserDetailDropDown;
