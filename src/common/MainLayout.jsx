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
// import MyBets from "../component/MyBets/MyBets";

const MainLayout = () => {
  const [siderOpen, setSiderOpen] = useState(false);
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  useEffect(() => {
    if (siderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [siderOpen]);

  const [trigger, { data }] = useBalanceApiMutation();
  const loginCheck = useSelector(isLoginSelector);
  useEffect(() => {
    if (loginCheck) {
      trigger();
    }
  }, [loginCheck]);
  const location = window.location.pathname;
  return (
    <div>
      <div className="main-layout-container">
        <div className="header-layout">
          <HeaderMessage />
          <WebHeaderComponent
            setSiderOpen={setSiderOpen}
            siderOpen={siderOpen}
            balanceData={data?.data}
          />
        </div>
        <div className="content-container">
          <div
            className={
              siderOpen ? "sider-layout-active" : "sider-layout-container"
            }
            onClick={() => setSiderOpen(!siderOpen)}
          >
            <SiderBar />
          </div>
          <div className="content">
            {isBreakPoint && <TopBanner />}
            <Outlet />
          </div>
          {!isBreakPoint ? (
            <div className="banner-sider">
              <SiderBanner />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <MobileFooter />
    </div>
  );
};

export default MainLayout;
