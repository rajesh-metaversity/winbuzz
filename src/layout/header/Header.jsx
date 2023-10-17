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
import { Link } from "react-router-dom";
import RulesModal from "../../component/RulesModal/RulesModal";
import { isLoginSelector } from '../../App/LoginSlice';
import { useSelector } from 'react-redux';
const HeaderComponent = () => {
	const loginCheck = useSelector(isLoginSelector);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const [modalValue, setModalValue] = useState(0);
	const modalElement = {
		0: <LoginForm />,
		1: <RulesModal />
	};
	console.log(loginCheck,"login");
	return (
		<>
			<ModalComponent Elememt={modalElement[modalValue]} open={open} setOpen={setOpen} />
			<div className="header-container">
				<div className="header-left-col">
					<img src={logo} alt="" />
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
									}}>
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
											)
										}}
									/>
								</li>
								<li
									onClick={() => {
										setModalValue(0);
										handleOpen();
									}}
									className="header-login">
									login
								</li>
								<Link to="/sign-up">
									<li className="header-register">Register</li>
								</Link>
							</>
						) : (
							<>
								<li>
									<ButtonComponent name={'Deposit'} icon={<AccountBalanceIcon />} bg={'green'} />
								</li>
								<ButtonComponent name="Withdraw" icon={<AddCardIcon />} bg={'red'} />
								<li
									className="header-rule"
									onClick={() => {
										setModalValue(1);
										handleOpen();
									}}>
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
											)
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
