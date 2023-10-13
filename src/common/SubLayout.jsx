import React from 'react'
import HeaderComponent from '../layout/header/Header'
import { Outlet } from 'react-router-dom'
import SiderBar from '../layout/sider/Sider';

const Sublayout = () => {
  return (
		<div>
			<div className="main-layout-container">
				<div className="header-layout">
					<HeaderComponent />
				</div>
				<div className="content-container">
					<div className="sider-layout-container ">
						<SiderBar />
					</div>
					<div className="sub-content">
						<Outlet />
					</div>
					{/* <div className="banner-sider">
          <SiderBanner />
        </div> */}
				</div>
			</div>
		</div>
  );
}

export default Sublayout