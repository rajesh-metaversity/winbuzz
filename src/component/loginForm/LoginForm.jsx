import logo from "../../assets/img/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

///styles
import "./styles.scss";
import { useEffect, useState } from "react";
import { useLoginDemoIdMutation, useLoginMutation } from '../../Services/Auth/Login';
import { useDispatch } from 'react-redux';
import { setIslogin } from '../../App/LoginSlice';

import Loader from '../Loader/Loader';
const LoginForm = ({ setOpen }) => {
	const dispatch = useDispatch();
const [demoChecker, setDemoChecker] = useState(false);
const [trigger, { data, error: isError, isLoading }] = useLoginMutation();
const [trigge, { data: demoIdData, error: demoIdError, isLoading: demoLoading }] = useLoginDemoIdMutation();

const [loginData, setloginData] = useState({
	userId: '',
	password: '',
	appUrl: 'localhost'
});
const [error, setError] = useState({
	userId: false,
	password: false
});
const check = data || demoIdData;
useEffect(() => {
	if (check) {
		if (check?.status == false) {
			toast.error(check?.message);
			dispatch(setIslogin(false));
		} else if (check?.token) {
			dispatch(setIslogin(true));
			setOpen(false);
			//   nav(rules_Regulation);
			toast.success('Login Successful');
		}
		localStorage.setItem('userId', check.userId);
		localStorage.setItem('token', check.token);
		if (demoChecker) {
			localStorage.setItem('userTypeInfo', check.userTypeInfo);
		}
		if (check.passwordtype == 'old') {
			// if (isBreakPoint) {
			//   console.log("mobile-chan");
			// } else {
			//   console.log("web-change");
			// }
			//   nav(changePassword_Web_Screen);
		} else if (check.passwordtype !== 'old') {
			// setloginCheck(false);
			localStorage.setItem('session', JSON.stringify(check));
		}
	}
}, [check]);
const handleChange = e => {
	const name = e.target.name;
	const value = e.target.value;
	if (!value) {
		setError(prev => {
			return {
				...prev,
				[name]: true
			};
		});
	} else if (value) {
		setloginData(prev => {
			return {
				...prev,
				[name]: value
			};
		});
		setError(prev => {
			return {
				...prev,
				[name]: false
			};
		});
	}
	setloginData(prev => {
		return {
			...prev,
			[name]: value
		};
	});
};
const onSumbit = () => {
	let isSuccess = false;
	for (const key of Object.keys(loginData)) {
		setError(prev => {
			return { ...prev, [key]: Boolean(!loginData[key]) };
		});
	}
	for (const key of Object.keys(loginData)) {
		const value = Boolean(loginData[key]);
		if (!value) {
			isSuccess = false;
			break;
		} else {
			isSuccess = true;
		}
	}
	if (isSuccess) {
		trigger(loginData);
	}
};

const demoIdLogin = e => {
	e.preventDefault();
	trigge({ appUrl: 'localhost' });
};

if (isLoading) {
	return <Loader />;
} else {
	return (
		<form>
			<div className="login_modal">
				<div className="cross_icon" onClick={() => setOpen(false)}>
					<CloseIcon />
				</div>
				<div className="login_section">
					<div className="winbuaa_logo">
						<img src={logo} alt="" />
					</div>
					<form className="login-form">
						<input
							type="text"
							placeholder="Username"
							onChange={handleChange}
							name="userId"
							value={loginData.userId}
							style={{
								border: error.userId ? '1px solid red' : '1px solid transparent'
							}}
						/>
						<input
							placeholder="Password"
							onChange={handleChange}
							name="password"
							type="password"
							value={loginData.password}
							style={{
								border: error.password ? '1px solid red' : '1px solid transparent'
							}}
						/>
					</form>
					<div className="login_buttons">
						<button
							className="login"
							onClick={event => {
								event.preventDefault();
								onSumbit();
							}}>
							LOGIN
						</button>
						<button
							className="login_with_demo"
							onClick={e => {
								setDemoChecker(true);
								demoIdLogin(e);
							}}>
							LOGINWITH DEMO ID
						</button>
						<button className="login_with_demo">
							<a href="#">Forgot Password?</a>
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}
};
export default LoginForm;
