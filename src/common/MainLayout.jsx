import { Outlet } from "react-router-dom";
import "./styles.scss";

import { SiderBanner } from "../component/SiderBanner/SiderBanner";
import SiderBar from "../layout/sider/Sider";
import { WebHeaderComponent, isSelfData } from "../layout/header/Header";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../useMediaQuery/UseMediaQuery";
import { useBalanceApiQuery } from "../Services/Balance/BalanceApi";
import HeaderMessage from "../component/HeaderMessage/HeaderMessage";
import MobileFooter from "../layout/mobileFooter/MobileFooter";
import { isLoginSelector } from "../App/LoginSlice";
import { useSelector } from "react-redux";
import TopBanner from "../component/topBanner/TopBanner";
import Loader from "../component/Loader/Loader";
import LoginForm from "../component/loginForm/LoginForm";
import ModalComponent from "../component/modal/Modal";
import ExposureIndex from "../component/exposureComponent/ExposureIndex";
import NavigationProvider from "../component/Navigation";
import whatsApp from "../assets/img/image.png";
import { useIsSelfMutation } from "../Services/isSelf/IsSelf";
import { useFooterdataMutation } from "../Services/footerData/FooterData";
// import MyBets from "../component/MyBets/MyBets";
export let setLoginFormHandlerRef;

const MainLayout = () => {
  const [siderOpen, setSiderOpen] = useState(false);
  const [modalValue, setModalValue] = useState(0);
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  const [open, setOpen] = useState(false);
  const loginCheck = useSelector(isLoginSelector);
  useEffect(() => {
    if (siderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [siderOpen]);

  const { data, isLoading } = useBalanceApiQuery(
    {},
    {
      pollingInterval: 1000,
      skip: !loginCheck,
    }
  );
  // const [trigger, { data, isLoading, isError }] = useBalanceApiMutation();

  // useEffect(() => {
  //   if (loginCheck) {
  //     trigger();
  //   }
  // }, [loginCheck]);

  const handleOpen = () => {
    setOpen(!open);
    // setSiderOpen(!siderOpen)
  };
  const modalElement = {
    0: <LoginForm setOpen={setOpen} />,
    1: <ExposureIndex />,
  };

  const setLoginFormHandler = () => {
    setModalValue(0);
    setOpen(true);
  };
  const appUrl = window.location.hostname;
  const [trigg, { data: isSlefDat }] = useIsSelfMutation();

  useEffect(() => {
    trigg({ appUrl: appUrl });
  }, []);
  setLoginFormHandlerRef = setLoginFormHandler;
  const appRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (appRef?.current) {
        appRef.current.style.top = `calc( ${window.scrollY}px + 50vh)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [trigger, { data: footerData }] = useFooterdataMutation();
  useEffect(() => {
    trigger({ appUrl: appUrl });
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
  } else {
    return (
      <div>
        <NavigationProvider>
          <ModalComponent
            Elememt={modalElement[modalValue]}
            open={open}
            setOpen={setOpen}
            loginWidth={modalValue == 0 ? "480px" : ""}
          />
          <div className="main-layout-container">
            <div className="header-layout">
              {!isBreakPoint && <HeaderMessage />}
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
          {!loginCheck && isSlefDat?.data?.selfAllowed && (
            <a
              ref={appRef}
              href={footerData?.data?.s_whatsapp?.link}
              className="whatsapp-fixed"
            >
              <div className="whatsapp-text">
                <span>Get an ID Instantly on Whatsapp</span>{" "}
                <span>Click Here Now</span>
              </div>
              <img alt="whatsapp" src={whatsApp}></img>
            </a>
          )}
          <MobileFooter setOpen={setOpen} />
        </NavigationProvider>
      </div>
    );
  }
};

export default MainLayout;
