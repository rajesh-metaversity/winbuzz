import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import { isLoginSelector, setIslogin } from "./App/LoginSlice";
import { useQtechAuthQuery } from "./Services/Qtech/Qtech";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const dispatch = useDispatch();

	const isLogin = useSelector(isLoginSelector);
	
	useEffect(() => {
		if (localStorage.getItem('session')) {
			dispatch(setIslogin(true));
		}
	}, []);

	// useEffect(() => {}, [st]);

	return (
		<>
			<ToastContainer />
			{isLogin && <IfLoginComp />}
			<Routes />
		</>
	);
}

const IfLoginComp = () => {
	const { data: qtechAuth } = useQtechAuthQuery(undefined, { pollingInterval: 3000 });
	useEffect(() => {
		localStorage.setItem('casino-token', qtechAuth?.data?.access_token);
	}, [qtechAuth]);
	console.log('hui');
	return <></>;
};
export default App;
