import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const AuraCasino = () => {
  const casinoStyle = {
    width: "100%",
    background: "transparent",
    boxShadow: 24,
    p: 0,
  };
  const token = localStorage.getItem("token");
  const { id, gameId } = useParams();
  return (
    <div>
      <Box sx={casinoStyle}>
        <Box
          sx={{
            background: "linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)",
            color: "#fff",
            mt: 2,
            pl: 1,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {id}
          </Typography>
          <Typography>
            <button>X</button>
          </Typography>
        </Box>

        <Typography className="main_casino_modals" id="modal-modal-description">
          <>
            <iframe
              src={`https://m.fawk.app/#/splash-screen/${token}/9482?opentable=${gameId}`}
              className="mobile_if"
              width="100%"
              title="mobile"
              allowFullScreen={true}
            />

            <iframe
              src={`https://d.fawk.app/#/splash-screen/${token}/9482?opentable=${gameId}`}
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

export default AuraCasino;
