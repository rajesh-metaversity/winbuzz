import { useDispatch } from "react-redux";
import "./App.css";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import { setIslogin } from "./App/LoginSlice";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("session")) {
      dispatch(setIslogin(true));
    }
  }, []);
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
