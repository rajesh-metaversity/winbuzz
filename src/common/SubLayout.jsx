import React from 'react'
import HeaderComponent from '../layout/header/Header'
import { Outlet } from 'react-router-dom'

const Sublayout = () => {
  return (
    <div>
    <div className="main-layout-container">
      <div className="header-layout">
        <HeaderComponent />
      </div>
      <div className="content-container">
        <div className="sider-container"></div>
        <div className="sub-content">
          <Outlet />
        </div>
        {/* <div className="banner-sider">
          <SiderBanner />
        </div> */}
      </div>
      
    </div>
  </div>
  )
}

export default Sublayout