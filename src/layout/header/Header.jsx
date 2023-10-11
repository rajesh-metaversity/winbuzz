import logo from "../../assets/img/logo.png";
import ButtonComponent from "../../component/button/Button";
import SubHeader from "./SubHeader";
///styles
import "./styles.scss";
const HeaderComponent = () => {
  return (
    <>
    <div className="header-container">
      <div className="header-left-col">
        <img src={logo} alt="" />
      </div>
      <div className="header-right-col">
        <ul>
          <li>
            <ButtonComponent name="Deposit" icon="asd" />
          </li>
          <ButtonComponent name="Withdraw" icon="adsf" />
          <li className="header-rule">Rules</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      </div>
      <SubHeader />
      </>
  );
};

export default HeaderComponent;
