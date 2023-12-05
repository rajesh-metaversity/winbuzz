import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useCasinoIframeMutation } from "../../Services/Qtech/Qtech";
import { useEffect } from "react";

import { isBrowser } from "react-device-detect";
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
    returnUrl: window.location.hostname,
    walletSessionId: token,
    token: localStorage.getItem("casino-token"),
    gameName: id,
  };

  useEffect(() => {
    trigger(qtechData);
  }, []);
  console.log(data?.data?.url, 'kasdfjaklsdjflkasdjflkasd');

  const nav = useNavigate();
  return (
    <div>
      <Box sx={casinoStyle}>
        <Box
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
        </Box>

        <Typography className="main_casino_modals" id="modal-modal-description">
          <>
            <iframe
              src={data?.data?.url}
              className="desktop_if"
              width="100%"
              title="desktop"
            />
          </>
        </Typography>
      </Box>
    </div>
  );
};

export default QtechCasino;
