import { useEffect, useState } from "react";
import { WebHeaderComponent } from "../layout/header/Header";
import { Outlet } from "react-router-dom";
import SiderBar from "../layout/sider/Sider";
import MobileFooter from "../layout/mobileFooter/MobileFooter";
import { useBalanceApiMutation } from "../Services/Balance/BalanceApi";
import { isLoginSelector } from "../App/LoginSlice";
import HeaderMessage from "../component/HeaderMessage/HeaderMessage";
import { useSelector } from "react-redux";
import LoginForm from "../component/loginForm/LoginForm";
const Sublayout = ({ setGame, gameName }) => {
  const [siderOpen, setSiderOpen] = useState(false);
  const [open, setOpen] = useState(false);
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

  const modalElement = {
    0: <LoginForm setOpen={setOpen} />,
    // 1: <RulesModal setOpen={setOpen} />,
  };

  const handleOpen = () => {
    setOpen(!open);
    console.log(open, "Scvsdc")
  };
  return (
		<div>
			<div className="main-layout-container">
				<div className="header-layout">
					<HeaderMessage />
					<WebHeaderComponent setSiderOpen={setSiderOpen} siderOpen={siderOpen} balanceData={data?.data} handleOpen={handleOpen} modalElement={modalElement} />
				</div>
				<div className="content-container">
					<div className={siderOpen ? 'sider-layout-active' : 'sider-layout-container'} onClick={() => setSiderOpen(!siderOpen)}>
						<SiderBar handleOpen={handleOpen} setSiderOpen={setSiderOpen} siderOpen={siderOpen} />
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
