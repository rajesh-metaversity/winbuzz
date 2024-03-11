import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../../assets/img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import { isSelfData } from "../../layout/header/Header";
const AuraCasino = () => {
  const nav = useNavigate();
  const casinoStyle = {
    width: "100%",
    background: "transparent",
    boxShadow: 24,
    p: 0,
  };
  const token = localStorage.getItem("token");
  const { id, gameId } = useParams();
  // const handlerClose = () => {
  //   nav("/casino-list");
  // };
  const userId = localStorage.getItem("userId");
  return (
    <div>
      <Box sx={casinoStyle}>
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
              src={`https://m.fawk.app/#/splash-screen/${token}/9482?opentable=${gameId}`}
              className="mobile_if"
              width="100%"
              title="mobile"
              allowFullScreen={true}
              key={`https://m.fawk.app/#/splash-screen/${token}/9482?opentable=${gameId}`}
            />

            <iframe
              src={`https://d.fawk.app/#/splash-screen/${token}/9482?opentable=${gameId}`}
              className="desktop_if"
              width="100%"
              title="desktop"
              key={`https://d.fawk.app/#/splash-screen/${token}/9482?opentable=${gameId}`}
            />
          </>
        </Typography>
      </Box>
    </div>
  );
};

export default AuraCasino;
