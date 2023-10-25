import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import { isLoginSelector, setIslogin } from "./App/LoginSlice";
import { useQtechAuthQuery } from "./Services/Qtech/Qtech";

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(isLoginSelector);

  useEffect(() => {
    if (localStorage.getItem("session")) {
      dispatch(setIslogin(true));
    }
  }, []);

  return (
    <>
      {isLogin && <IfLoginComp />}
      <Routes />
    </>
  );
}

const IfLoginComp = () => {
  const { data: qtechAuth } = useQtechAuthQuery("", { pollingInterval: 3000 });
  useEffect(() => {
    localStorage.setItem("casino-token", qtechAuth?.data?.access_token);
  }, [qtechAuth]);

  return <></>;
};
export default App;
