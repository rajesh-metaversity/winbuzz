import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/img/logo.png";
///styles
import "./styles.scss";
import { useCasinoIframeMutation } from "../../Services/Qtech/Qtech";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import { isSelfData } from "../../layout/header/Header";

const CasinoIframe = () => {
  const { id, matchId } = useParams();
  const casinoData = {
    playerId: "121212",
    currency: "INR",
    country: "IN",
    gender: "M",
    gameName: id,
    birthDate: "1986-01-01",
    lang: "en_IN",
    mode: "real",
    device: isBrowser ? "desktop" : "mobile",
    returnUrl: "/casino",
    token: localStorage.getItem("casino-token"),
    walletSessionId: localStorage.getItem("token"),
  };

  const [trigger, { data }] = useCasinoIframeMutation();
  useEffect(() => {
    trigger(casinoData);
  }, []);

  const nav = useNavigate();
  const handleNav = () => {
    nav("/");
  };
  return (
    <div>
      <div className="casino-iframe-header">
        <div className="casino-iframe-header-left-col">
          <span onClick={() => handleNav()}>
            <HomeIcon /> 
          </span>
          <img src={isSelfData?.data?.logo} alt="" onClick={() => handleNav()} />
          <span>{matchId}</span>
        </div>
        <div className="casino-iframe-header-right-col"></div>
      </div>
      <div className="casino-iframe">
        <iframe src={data?.data?.url} frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default CasinoIframe;
