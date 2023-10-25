import { useDispatch } from "react-redux";
import "./App.css";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import { setIslogin } from "./App/LoginSlice";
import { useQtechAuthQuery } from './Services/Qtech/Qtech';

function App() {
  const dispatch = useDispatch();
  
  const { data: qtechAuth } = useQtechAuthQuery('', { pollingInterval: 3000 });
  
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
