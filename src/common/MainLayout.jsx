import { Outlet } from "react-router-dom";
import "./styles.scss";
import HeaderComponent from "../layout/header/Header";
import SiderBanner from "../component/SiderBanner/SiderBanner";
// import MyBets from "../component/MyBets/MyBets";

const MainLayout = () => {
  return (
    <div>
      <div className="main-layout-container">
        <div className="header-layout">
          <HeaderComponent />
        </div>
        <div className="content-container">
          <div className="sider-container"></div>
          <div className="content">
            <Outlet />
          </div>
          <div className="banner-sider">
            <SiderBanner />

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MainLayout;
