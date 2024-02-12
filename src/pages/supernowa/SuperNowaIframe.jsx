import { useEffect } from "react";
import { useSupernowaAuthenticationMutation } from "../../Services/supernowa/SupernowaCasino";
import { useNavigate, useParams } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
const SuperNowaIframe = () => {
  const [authenticationTrigger, { data: authenticationdata }] =
    useSupernowaAuthenticationMutation();
  const { gameCode, gameId } = useParams();
  useEffect(() => {
    authenticationTrigger({
      game: {
        gameCode,
        gameId,
      },
      timestamp: Date.now(),
      user: {
        backUrl: window.location.hostname,
        currency: "INR",
      },
    });
  }, []);

  const nav = useNavigate();
  const userId = localStorage.getItem("userId");
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* <CloseIcon
        sx={{
          padding: "10px 0",
          backgroundColor: "#B88831",
          color: "#ffffff",
          fontSize: 16,
          cursor: "pointer",
          width: "100%",
        }}
        onClick={handlerGoBack}
      /> */}
      <div
        className="casino-iframe-header"
        style={{ paddingInline: "10px", width: "calc(100% - 20px)" }}
      >
        <div
          className="casino-iframe-header-left-col"
          style={{ alignItems: "center" }}
        >
          <span
            onClick={() => nav("/")}
            style={{ display: "flex", alignItems: "end" }}
          >
            <HomeIcon />
          </span>
          <img src={logo} alt="" onClick={() => nav("/")} />
          {/* <span>{matchId}</span> */}
        </div>
        <div
          className="casino-iframe-header-right-col"
          style={{ color: "white", display: "flex", alignItems: "center" }}
        >
          <PersonIcon />
          {userId}
        </div>
      </div>
      <iframe
        style={{ width: "100%" }}
        className="_iframe"
        src={authenticationdata?.data?.launchURL}
        frameborder="0"
      />
    </div>
  );
};

export default SuperNowaIframe;
