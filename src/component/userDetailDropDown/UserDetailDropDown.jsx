import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import List from "./list";
import ModalComponent from "../modal/Modal";
import BonusRules from "../bonusRule/BonusRules";
import {
  account_statement,
  bets_profit_loss,
  mybets,
  passwordChange,
} from "../../routes/PagesUrl";
import { Link, NavLink } from "react-router-dom";
import { useLogoutMutation } from "../../Services/Auth/Logout";
import { useDispatch } from "react-redux";
import { setIslogin } from "../../App/LoginSlice";
import { StyledMenu } from "./styled";
const UserDetailDropDown = ({ name }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setAnchorEl(false);
  };

  const [trigger, { data, isLoading, isError }] = useLogoutMutation();

  // console.log("logoutData", data.stat)

  useEffect(() => {
    if (data?.status) {
      dispatch(setIslogin(false));
    }
  }, [data]);

  return (
    <>
      <ModalComponent
        Elememt={<BonusRules setOpen={setOpen} open={openModal} />}
        open={openModal}
        setOpen={setOpen}
      />
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white", padding: "0", minWidth: "auto" }}
      >
        {name} <ArrowDropDownIcon />
      </Button>
      <StyledMenu
        sx={{
          "&.MuiList-root ": {
            "&::after": {
              content: '""',
              height: "30px",
              width: "30px",
              top: 0,
              backgroundColor: "#ffffff",
            },
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}

        // className="drop-menu"
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
          <li
            style={{ borderBottom: "1px solid #b88831", marginBottom: "5px" }}
          >
            <List name="Available Withdrawal" bot="" value="0.29" />
          </li>

          <li className="refer_earn">Refer and Earn </li>
          <li className="bonus">Awaiting Bonus 1290</li>
          <Link to={mybets} className="link">
            <li
              className="list-bottom-border"
              style={{ borderTop: "1px solid #b88831", textDecoration: "none" }}
            >
              My Bets
            </li>
          </Link>
          <Link to={bets_profit_loss} className="link">
            <li className="list-bottom-border"> Betting Profit and Loss</li>
          </Link>
          <Link className="link" to={account_statement}>
            <li className="list-bottom-border">Account Statement</li>
          </Link>
          <Link className="link">
            <li className="list-bottom-border">Market Analysis</li>
          </Link>
          <Link to={passwordChange} className="link">
            <li className="list-bottom-border">Change Password</li>
          </Link>
          <li className="list-bottom-border" onClick={() => handleOpen()}>
            Bonus Rules
          </li>
          <li className="logout-li" onClick={() => trigger()}>
            Logout
            <ExitToAppIcon />
          </li>
        </ul>
        {/* <MenuItem onClick={handleClose}></MenuItem>
		<>
			<ModalComponent Elememt={<BonusRules />} open={openModal} setOpen={setOpen} />
			<Button aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={{ color: 'black' }}>
				Demo <ArrowDropDownIcon />
			</Button>
			<StyledMenu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}>
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
					<li style={{ borderBottom: '1px solid #b88831', marginBottom: '5px' }}>
						<List name="Available Withdrawal" bot="" value="0.29" />
					</li>
					<li className="refer_earn">Refer and Earn </li>
					<li className="bonus">Awaiting Bonus 1290</li>
					<Link to={mybets} className="link">
						<li className="list-bottom-border" style={{ borderTop: '1px solid #b88831', textDecoration: 'none' }}>
							My Bets
						</li>
					</Link>
					<Link to={bets_profit_loss} className="link">
						<li className="list-bottom-border"> Betting Profit and Loss</li>
					</Link>
					<Link className="link">
						<li className="list-bottom-border">Account Statement</li>
					</Link>
					<Link className="link">
						<li className="list-bottom-border">Market Analysis</li>
					</Link>
					<Link to={passwordChange} className="link">
						<li className="list-bottom-border">Change Password</li>
					</Link>
					<li className="list-bottom-border" onClick={() => handleOpen()}>
						Bonus Rules
					</li>
					<li className="logout-li">
						Logout
						<ExitToAppcon />
					</li>
				</ul>
				{/* <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </StyledMenu>
    </>
  );
};

export default UserDetailDropDown;
