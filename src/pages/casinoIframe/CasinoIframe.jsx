import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/img/logo.png";
///styles
import "./styles.scss";
import { useCasinoIframeMutation } from "../../Services/Qtech/Qtech";
import { useEffect } from "react";
const CasinoIframe = () => {
  const casinoData = {
    playerId: "121212",
    currency: "INR",
    country: "IN",
    gender: "M",
    gameName: gameId,
    birthDate: "1986-01-01",
    lang: "en_IN",
    mode: "real",
    device: window.innerWidth > 1024 ? "desktop" : "mobile",
    returnUrl: "/provider",
    token: localStorage.getItem("qtech_token"),
    walletSessionId: localStorage.getItem("token"),
  };

  const [trigger, { data }] = useCasinoIframeMutation();

  useEffect(() => {
    trigger();
  }, []);

  console.log(data);
  return (
    <div>
      <div className="casino-iframe-header">
        <div className="casino-iframe-header-left-col">
          <HomeIcon />
          <img src={logo} alt="" />
          <span>Vip Rouletes</span>
        </div>
        <div className="casino-iframe-header-right-col">8787887878</div>
      </div>
      <div className="casino-iframe">
        <iframe src="" frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default CasinoIframe;
