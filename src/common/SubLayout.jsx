import { useEffect, useRef, useState } from "react";
import { WebHeaderComponent } from "../layout/header/Header";
import { Outlet } from "react-router-dom";
import SiderBar from "../layout/sider/Sider";
import MobileFooter from "../layout/mobileFooter/MobileFooter";
import { useBalanceApiQuery } from "../Services/Balance/BalanceApi";
import { isLoginSelector } from "../App/LoginSlice";
import HeaderMessage from "../component/HeaderMessage/HeaderMessage";
import { useSelector } from "react-redux";
import LoginForm from "../component/loginForm/LoginForm";
import { useMediaQuery } from "../useMediaQuery/UseMediaQuery";
import ExposureIndex from "../component/exposureComponent/ExposureIndex";
import ModalComponent from "../component/modal/Modal";
import whatsApp from "../assets/img/image.png";
import { useIsSelfMutation } from "../Services/isSelf/IsSelf";
import { useFooterdataMutation } from "../Services/footerData/FooterData";
// import { userBalnceData } from "./MainLayout";

const Sublayout = ({ setGame, gameName }) => {
  const [siderOpen, setSiderOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const loginCheck = useSelector(isLoginSelector);
  useEffect(() => {
    if (siderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [siderOpen]);

  const { data } = useBalanceApiQuery(
    {},
    {
      pollingInterval: 1000,
      skip: !loginCheck,
    }
  );

  // userBalanceTrigger = trigger;
  // userBalnceData = data;
  const appUrl = window.location.hostname;
  const [trigg, { data: isSlefDat }] = useIsSelfMutation();

  useEffect(() => {
    trigg({ appUrl: appUrl });
  }, []);
  const [modalValue, setModalValue] = useState(0);
  const modalElement = {
    0: <LoginForm setOpen={setOpen} />,
    1: <ExposureIndex />,
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  const isBreakPoint = useMediaQuery("(max-width: 780px)");

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
  return (
    <div>
      {!loginCheck && isSlefDat?.data?.selfAllowed && (
        <a
          ref={appRef}
          href={footerData?.data?.s_whatsapp?.link}
          className="whatsapp-fixed"
        >
          <div className="whatsapp-text">
            <span>Get an ID Instantly on Whatsapp</span>
            <span>Click Here Now</span>
          </div>
          <img alt="whatsapp" src={whatsApp}></img>
        </a>
      )}
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
            setSiderOpen={setSiderOpen}
            siderOpen={siderOpen}
            balanceData={data?.data}
            handleOpen={handleOpen}
            modalElement={modalElement}
            modalValue={modalValue}
            setModalValue={setModalValue}
          />
        </div>
        <div className="content-container">
          <div
            className={
              siderOpen ? "sider-layout-active" : "sider-layout-container"
            }
            onClick={() => setSiderOpen(!siderOpen)}
          >
            <SiderBar
              handleOpen={handleOpen}
              setSiderOpen={setSiderOpen}
              siderOpen={siderOpen}
            />
          </div>
          <div className="sub-content">
            <Outlet context={[setGame, gameName]} />
          </div>
          {/* <div className="banner-sider">
          <SiderBanner />
        </div> */}
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};

export default Sublayout;
