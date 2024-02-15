import { useEffect, useState } from "react";
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
  const [modalValue, setModalValue] = useState(0);
  const modalElement = {
    0: <LoginForm setOpen={setOpen} />,
    1: <ExposureIndex />,
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
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
