import { Outlet } from "react-router-dom";
import "./styles.scss";

import { SiderBanner } from "../component/SiderBanner/SiderBanner";
import SiderBar from "../layout/sider/Sider";
import { WebHeaderComponent } from "../layout/header/Header";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../useMediaQuery/UseMediaQuery";
import { useBalanceApiMutation } from "../Services/Balance/BalanceApi";
import HeaderMessage from "../component/HeaderMessage/HeaderMessage";
import MobileFooter from "../layout/mobileFooter/MobileFooter";
import { isLoginSelector } from "../App/LoginSlice";
import { useSelector } from "react-redux";
import TopBanner from "../component/topBanner/TopBanner";
import Loader from "../component/Loader/Loader";
import LoginForm from "../component/loginForm/LoginForm";
import ModalComponent from "../component/modal/Modal";
// import MyBets from "../component/MyBets/MyBets";
export let setLoginFormHandlerRef;
const MainLayout = () => {
  const [siderOpen, setSiderOpen] = useState(false);
  const [modalValue, setModalValue] = useState(0);
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (siderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [siderOpen]);

  const [trigger, { data, isLoading, isError }] = useBalanceApiMutation();
  const loginCheck = useSelector(isLoginSelector);

  useEffect(() => {
    if (loginCheck) {
      trigger();
    }
  }, [loginCheck]);

  const handleOpen = () => {
    setOpen(!open);
    // setSiderOpen(!siderOpen)
  };
  const modalElement = {
    0: <LoginForm setOpen={setOpen} />,
    // 1: <RulesModal setOpen={setOpen} />,
  };

  const setLoginFormHandler = () => {
    setModalValue(0);
    setOpen(true);
  };
  setLoginFormHandlerRef = setLoginFormHandler;
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div>
        <ModalComponent
          Elememt={modalElement[modalValue]}
          open={open}
          setOpen={setOpen}
          loginWidth={modalValue == 0 ? "480px" : ""}
        />
        <div className="main-layout-container">
          <div className="header-layout">
            <HeaderMessage />
            <WebHeaderComponent
              setOpen={setOpen}
              open={open}
              handleOpen={handleOpen}
              setSiderOpen={setSiderOpen}
              siderOpen={siderOpen}
              balanceData={data?.data}
              setModalValue={setModalValue}
              modalValue={modalValue}
              modalElement={modalElement}
            />
          </div>
          <div className="content-container">
            <div
              className={
                siderOpen ? "sider-layout-active" : "sider-layout-container"
              }
              onClick={() => setSiderOpen(!siderOpen)}
            >
              <SiderBar handleOpen={handleOpen} setSiderOpen={setSiderOpen} />
            </div>
            <div className="content">
              <TopBanner />
              <Outlet />
            </div>
            {!isBreakPoint ? (
              <div className="banner-sider">
                <SiderBanner
                  setOpen={setOpen}
                  open={open}
                  setModalValue={setModalValue}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <MobileFooter setOpen={setOpen} />
      </div>
    );
  }
};

export default MainLayout;
