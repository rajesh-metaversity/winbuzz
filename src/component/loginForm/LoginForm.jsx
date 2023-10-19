import logo from "../../assets/img/logo.png";
import CloseIcon from "@mui/icons-material/Close";
///styles
import "./styles.scss";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../Services/Auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { isLoginSelector, setIslogin } from "../../App/LoginSlice";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ setOpen }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const loginCheck = useSelector(isLoginSelector);
  const [trigger, { data, error: isError, isLoading }] = useLoginMutation();

  const [loginData, setloginData] = useState({
    userId: "",
    password: "",
    appUrl: "localhost",
  });
  const [error, setError] = useState({
    userId: false,
    password: false,
  });
  useEffect(() => {
    if (data) {
      if (data.status === false) {
        console.log("cjec");
        //   message.error(data?.message);
        dispatch(setIslogin(false));
      } else if (data?.token) {
        //   nav(rules_Regulation);
        dispatch(setIslogin(true));
      }
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("token", data.token);
      if (data.passwordtype == "old") {
        // if (isBreakPoint) {
        //   console.log("mobile-chan");
        // } else {
        //   console.log("web-change");
        // }
        //   nav(changePassword_Web_Screen);
      } else if (data.passwordtype !== "old") {
        // setloginCheck(false);
        // console.log(data);
        localStorage.setItem("session", JSON.stringify(data));
      }
    }
  }, [data]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (!value) {
      setError((prev) => {
        return {
          ...prev,
          [name]: true,
        };
      });
    } else if (value) {
      setloginData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
      setError((prev) => {
        return {
          ...prev,
          [name]: false,
        };
      });
    }
    setloginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const onSumbit = () => {
    let isSuccess = false;
    for (const key of Object.keys(loginData)) {
      setError((prev) => {
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
    //
  };
  useEffect(() => {
    if (loginCheck) {
      setOpen(false);
    }
  }, [loginCheck]);

  return (
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
              border: error.userId ? "1px solid red" : "1px solid transparent",
            }}
          />
          <input
            placeholder="Password"
            onChange={handleChange}
            name="password"
            type="password"
            value={loginData.password}
            style={{
              border: error.password
                ? "1px solid red"
                : "1px solid transparent",
            }}
          />
        </form>
        <div className="login_buttons">
          <button className="login" onClick={onSumbit}>
            LOGIN
          </button>
          <button className="login_with_demo">LOGINWITH DEMO ID</button>
          <a href="#">Forgot Password</a>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
