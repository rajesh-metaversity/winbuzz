import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useCasinoIframeMutation } from "../../Services/Qtech/Qtech";
import { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import { isBrowser } from "react-device-detect";
import { isSelfData } from "../../layout/header/Header";
const QtechCasino = () => {
  const casinoStyle = {
    width: "100%",
    background: "transparent",
    boxShadow: 24,
    p: 0,
  };
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const [trigger, { data }] = useCasinoIframeMutation();
  const qtechData = {
    playerId: "121212",
    currency: "INR",
    country: "IN",
    gender: "M",
    birthDate: "1986-01-01",
    lang: "en_IN",
    mode: "real",
    device: isBrowser ? "desktop" : "mobile",
    // returnUrl: "https://sportindia247.com",
    returnUrl: `https://${window.location.hostname}`,
    walletSessionId: token,
    token: localStorage.getItem("casino-token"),
    gameName: id,
  };

  useEffect(() => {
    trigger(qtechData);
  }, []);

  const nav = useNavigate();
  const userId = localStorage.getItem("userId");
  return (
    <div>
      <Box sx={casinoStyle}>
        {/* <Box
          sx={{
            background: "linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)",
            color: "#fff",
            // mt: 2,
            pl: 1,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginTop: "0px" }}
          >
            {id}
          </Typography>
          <Typography>
            <button onClick={() => nav("/")}>X</button>
          </Typography>
        </Box> */}
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
            <img src={isSelfData?.data?.logo} alt="" onClick={() => nav("/")} />
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
        <Typography className="main_casino_modals" id="modal-modal-description">
          <>
            <iframe
              style={{ height: "calc(100vh - 55px)" }}
              src={data?.data?.url}
              // className="desktop_if"
              width="100%"
              // height="100%"
              title="desktop"
            />
          </>
        </Typography>
      </Box>
    </div>
  );
};

export default QtechCasino;
