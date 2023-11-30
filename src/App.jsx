import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import { isLoginSelector, setIslogin } from "./App/LoginSlice";
import { useQtechAuthQuery } from "./Services/Qtech/Qtech";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useValidateJWTMutation } from "./Services/ValidateJWT/Validate";

function App() {
  const [trigger, { data, isLoading, isError }] = useValidateJWTMutation();
  const dispatch = useDispatch();

  const isLogin = useSelector(isLoginSelector);

  useEffect(() => {
    if (localStorage.getItem("session")) {
      dispatch(setIslogin(true));
    }
  }, []);

  useEffect(() => {
    if (isLogin) {
      const validateJWT = setInterval(() => {
        dispatch(trigger({}));
      }, 5000);
      return () => clearInterval(validateJWT);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      {isLogin && <IfLoginComp />}
      <Routes />
    </>
  );
}

const IfLoginComp = () => {
  const { data: qtechAuth } = useQtechAuthQuery(undefined, {
    pollingInterval: 3000,
  });
  useEffect(() => {
    localStorage.setItem("casino-token", qtechAuth?.data?.access_token);
  }, [qtechAuth]);
  return <></>;
};
export default App;
