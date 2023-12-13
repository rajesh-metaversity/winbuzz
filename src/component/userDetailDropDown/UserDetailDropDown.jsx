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
  setting,
  unsettled,
} from "../../routes/PagesUrl";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../Services/Auth/Logout";
import { useDispatch } from "react-redux";
import { setIslogin } from "../../App/LoginSlice";
import { StyledMenu } from "./styled";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import Logout from "../LogoutConfirmation/Logout";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
const UserDetailDropDown = ({ name, balanceData }) => {
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const nav = useNavigate();
  const [openModal, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setAnchorEl(false);
  };

  const [trigger, { data, isLoading, isError }] = useLogoutMutation();

  useEffect(() => {
    if (data?.status) {
      dispatch(setIslogin(false));
      toast.success(data.message);
      localStorage.clear();
      nav("/");
    }
  }, [data]);
  const [logutModal, setLogutModal] = useState(false);

  useEffect(() => {
    if (logutModal || openModal) {
      handleClose();
    }
  }, [logutModal, openModal]);
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <ModalComponent
          Elememt={<Logout trigger={trigger} setLogutModal={setLogutModal} />}
          open={logutModal}
          setOpen={setLogutModal}
        />
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
              <List
                name="Wallet Amount"
                bot="(Inclusive bonus)"
                value={balanceData?.balance}
              />
            </li>
            <li>
              <List name="Net Exposure" bot="" value={balanceData?.libality} />
            </li>
            {/* <li>
              <List name="Bonus" bot="" value="0" />
            </li> */}
            {/* <li
              style={{ borderBottom: "1px solid #b88831", marginBottom: "5px" }}
            >
              <List name="Available Withdrawal" bot="" value="0" />
            </li> */}
            {/* 
            <li className="refer_earn">Refer and Earn </li>
            <li className="bonus">Awaiting Bonus 1290</li> */}


            {/* {!isBreakPoint && (
              <Link to={mybets} className="link">
                <li
                  className="list-bottom-border"
                  style={{
                    borderTop: "1px solid #b88831",
                    textDecoration: "none",
                  }}
                  onClick={() => handleClose()}
                >
                  My Bets
                </li>
              </Link>
            )} */}
             <Link to={mybets} className="link">
                <li
                  className="list-bottom-border"
                  style={{
                    borderTop: "1px solid #b88831",
                    textDecoration: "none",
                  }}
                  onClick={() => handleClose()}
                >
                  My Bets
                </li>
              </Link>
            <Link to={bets_profit_loss} className="link">
              <li className="list-bottom-border" onClick={() => handleClose()}>
                {" "}
                Betting Profit and Loss
              </li>
            </Link>
            <Link className="link" to={account_statement}>
              <li className="list-bottom-border" onClick={() => handleClose()}>
                Account Statement
              </li>
            </Link>
            <Link className="link" to={setting}>
                {" "}
                <li
                  className="list-bottom-border"
                  onClick={() => handleClose()}
                >
                  Settings
                </li>{" "}
              </Link>
            {/* {isBreakPoint && (
              <Link className="link" to={setting}>
                {" "}
                <li
                  className="list-bottom-border"
                  onClick={() => handleClose()}
                >
                  Settings
                </li>{" "}
              </Link>
            )} */}
            {/* {isBreakPoint && <li className="list-bottom-border">Open Bets</li>} */}
            {/* {isBreakPoint && (
              <Link className="link" to={unsettled}>
                <li
                  className="list-bottom-border"
                  onClick={() => handleClose()}
                >
                  Unsettled Bets
                </li>
              </Link>
            )} */}
            <Link className="link" to={unsettled}>
                <li
                  className="list-bottom-border"
                  onClick={() => handleClose()}
                >
                  Unsettled Bets
                </li>
              </Link>
            {/* {!isBreakPoint && (
              <Link className="link">
                <li className="list-bottom-border">Market Analysis</li>
              </Link>
            )} */}
             <Link className="link">
                <li className="list-bottom-border">Market Analysis</li>
              </Link>


            <Link
              to={passwordChange}
              className="link"
              onClick={() => handleClose()}
            >
              <li className="list-bottom-border">Change Password</li>
            </Link>
            {/* <li className="list-bottom-border" onClick={() => handleOpen()}>
              Bonus Rules
            </li> */}
            <li className="logout-li" onClick={() => setLogutModal(true)}>
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
  }
};

export default UserDetailDropDown;
