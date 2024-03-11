import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useLoginDemoIdMutation } from "../../Services/Auth/Login.js";
import { useRegisterMutation } from "../../Services/selfRegister/SelfRegister.js";
////styles
import "./style.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePass } from "../../routes/PagesUrl.js";
import { setIslogin } from "../../App/LoginSlice.js";
import { toast } from "react-toastify";
import { useIsSelfMutation } from "../../Services/isSelf/IsSelf.js";
import {
  showErrorToast,
  showSuccessToast,
} from "../../component/toast/Toast.js";
import Loader from "../../component/Loader/Loader.jsx";

const SignUp = () => {
  const [trigg, { data: isSlefDat }] = useIsSelfMutation();

  const [error, setError] = useState({
    username: false,
    password: false,
    confirmPassword: false,
    mobile: false,
  });
  const [formData, setformData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    casinoComm: "",
    fancyComm: "",
    oddsComm: "",
    appUrl: window.location.hostname,
    userId: "",
  });
  useEffect(() => {
    setformData((prev) => {
      return {
        ...prev,
        casinoComm: isSlefDat?.data?.casinoComm,
        fancyComm: isSlefDat?.data?.fancyComm,
        oddsComm: isSlefDat?.data?.oddsComm,
        appUrl: window.location.hostname,
      };
    });
  }, [isSlefDat]);

  console.log(isSlefDat, formData, "dataIsSlef");
  const [demoChecker, setDemoChecker] = useState(false);
  const formHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.replace(" ", "");
    setformData((prev) => {
      if (!value) {
        setError((prev) => {
          return {
            ...prev,
            [name]: true,
          };
        });
      } else {
        setError((prev) => {
          return {
            ...prev,
            [name]: false,
          };
        });
      }
      if (name == "username") {
        return {
          ...prev,
          [name]: value,
          userId: value,
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  useEffect(() => {
    trigg({ appUrl: window.location.hostname });
  }, []);

  const [trigger, { data, isLo }] = useRegisterMutation();
  const [
    trigge,
    { data: demoIdData, error: demoIdError, isLoading: demoLoading },
  ] = useLoginDemoIdMutation();
  const onSumbit = () => {
    let isSuccess = false;
    for (const key of Object.keys(formData)) {
      if (
        key == "username" ||
        key == "password" ||
        key == "confirmPassword" ||
        key == "mobile"
      ) {
        setError((prev) => {
          return { ...prev, [key]: Boolean(!formData[key]) };
        });
      }
    }
    for (const key of Object.keys(formData)) {
      const value = Boolean(formData[key]);
      if (!value) {
        if (
          key == "username" ||
          key == "password" ||
          key == "confirmPassword" ||
          key == "mobile"
        ) {
          isSuccess = false;
          break;
        }
      } else {
        isSuccess = true;
      }
    }
    if (isSuccess) {
      trigger(formData);
    }
  };

  const demoIdLogin = (e) => {
    // e.preventDefault();
    trigge({ appUrl: window.location.hostname });
  };
  useEffect(() => {
    if (demoIdData?.token) {
      setDemoChecker(true);
    }
  }, [demoIdData]);

  const nav = useNavigate();
  const dispatch = useDispatch();
  const check = data || demoIdData;
  useEffect(() => {
    if (check) {
      if (check.passwordtype == "old") {
        localStorage.setItem("token", check.token);
        localStorage.setItem("userId", check.userId);
        nav(changePass);
        if (check.userTypeInfo == 2) {
          localStorage.setItem("session", JSON.stringify(check));
          // setOpen(false);
          dispatch(setIslogin(true));
          nav("/");
        } else if (check.passwordtype != "old") {
          nav("/");
        }

        // setloginCheck(false);
      } else {
        if (check?.status == false) {
          showErrorToast(check?.message);
          dispatch(setIslogin(false));
        } else if (check?.token) {
          localStorage.setItem("token", check.token);
          localStorage.setItem("userId", check.userId);
          dispatch(setIslogin(true));
          // setOpen(false);
          nav("/");
          showSuccessToast("Login Successful");
        }

        localStorage.setItem("token", check.token);

        if (demoChecker) {
          localStorage.setItem("userTypeInfo", check.userTypeInfo);
        }
      }
    }
  }, [check]);
  if (demoLoading) {
    return <Loader />;
  } else {
    return (
      <div className="signup_section">
        <div className="signup_content">
          <div className="signup_logo">
            <img src={isSlefDat?.data?.logo} alt="" />
          </div>
          <form className="sign_up_form_input" autoComplete="new-password">
            <input
              type="text"
              placeholder="Username"
              name="username"
              autoComplete="new-password"
              style={{
                borderBottom: error?.username
                  ? "1px solid red"
                  : "1px solid #fff",
              }}
              onChange={(e) => formHandleChange(e)}
              value={formData?.username}
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="mobile"
              onChange={(e) => formHandleChange(e)}
              value={formData?.mobile}
              style={{
                borderBottom: error?.mobile
                  ? "1px solid red"
                  : "1px solid #fff",
              }}
            />
            <input
             autoComplete="new-password"
              type="password"
              placeholder="New Password"
              name="password"
              onChange={(e) => formHandleChange(e)}
              value={formData?.password}
              style={{
                borderBottom: error?.password
                  ? "1px solid red"
                  : "1px solid #fff",
              }}
            />
            <input
              type="password"
              autoComplete="new-password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) => formHandleChange(e)}
              value={formData?.confirmPassword}
              style={{
                borderBottom: formData?.confirmPassword
                  ? formData?.confirmPassword == formData?.password
                    ? "1px solid #fff"
                    : "1px solid red"
                  : "1px solid #fff",
              }}
            />

            <div className="check_main">
              <div className="check_section">
                <input className="check" type="checkbox" />
                <label className="lebel" htmlFor="age">
                  I have over 18 years old
                </label>
                <div>
                  <input className="check" type="checkbox" />
                  <label className="lebel" htmlFor="age">
                    I agree to the Terms&Conditions
                  </label>
                </div>
              </div>
            </div>
          </form>
          {/* <p>
          By continuing you will receive a one-time verification code to your
          phone number by SMS
        </p> */}
          <div className="get_otp">
            <button className="otp_btn" onClick={() => onSumbit()}>
              Submit
            </button>
            <div className="or">
              <span>OR</span>
            </div>
          </div>
          <div className="get_otp">
            <button className="otp_btn" onClick={() => demoIdLogin()}>
              Log in with demo id
            </button>
            {/* <div className="or">
            <span>OR</span>
          </div> */}
          </div>
          {/* <div className="get_id_from_whatsapp_section">
          <p>Get Your Ready-Made ID From Whatsapp</p>
          <button className="whatsapp_now">
            <span>
              <WhatsAppIcon />
            </span>
            WHATSAPP NOW
          </button>
        </div> */}
          {/* <div className="allready_have_account_section">
          <a href="#">Already have account</a>
          <a href="#">Log In</a>
        </div> */}
          {/* <div className="deposite_section">
          <DepositCard name="400% BONUS" bonus="1ST DEPOSIT" />
          <DepositCard name="50% BONUS" bonus="2ND DEPOSIT" />
          <DepositCard name="10% BONUS" bonus="3RD DEPOSIT" />
        </div> */}
        </div>
      </div>
    );
  }
};

export default SignUp;
