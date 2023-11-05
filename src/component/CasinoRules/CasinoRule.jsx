import { useSelector } from "react-redux";
import { isLoginSelector } from "../../App/LoginSlice";
import { useCasinoRulesMutation } from "../../Services/casino/Casino";
import casinoImd from "../../assets/casino.png";
import { Box, Modal, Typography } from "@mui/material";
import { useEffect } from "react";
import "./CasinoRule.scss";
import { useState } from "react";

const CasinoRule = ({ handleClose, open, gameId, gameName, setOpen }) => {
  const [casinoOpen, setCasinoOpen] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)",
    boxShadow: 24,
    p: 2,
  };
  const casinoStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    background: "transparent",
    boxShadow: 24,
    p: 0,
  };

  const token = localStorage.getItem("token");

  const [trigger, { data, isLoading, isError }] = useCasinoRulesMutation();
  const loginCheck = useSelector(isLoginSelector);
  const handleCloseCasino = () => setCasinoOpen(false);
  useEffect(() => {
    if (loginCheck) {
      trigger();
    }
  }, [loginCheck]);

  const handleAgree = () => {
    setCasinoOpen(true);
    setOpen(false);
  };

  console.log(data?.data?.aura, "DSfsdafsadfadc");

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            className="main_casino_modals"
            id="modal-modal-description"
            sx={{ mt: 2 }}>
            <div className="casino_images_modals">
              <img src={casinoImd} alt="" />
            </div>
            <div className="casino_message">
              <p className="please_note">Please Note</p>
              <p className="points">(1 Points = ₹{data?.data?.aura})</p>

              <div className="casino_dis">
                <p>
                  <span>For Example:</span> If you place ₹100 your bet will be ₹
                  {100 * data?.data?.aura} Win or Loss according to the above
                  calculation.
                </p>
                <p>
                  यदि आप ₹100 लगाते हैं तो उपरोक्त गणना के अनुसार आपकी शर्त जीत
                  या हार ₹ {100 * data?.data?.aura} होगी।
                </p>
              </div>
            </div>
          </Typography>
          <div className="agree_btn">
            <button onClick={handleAgree}>Ok I Agree</button>
            <button onClick={handleClose}>No, I Don't Agree</button>
          </div>
        </Box>
      </Modal>

      <Modal
        open={casinoOpen}
        onClose={handleCloseCasino}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={casinoStyle}>
            <Box sx={{
              background:
                "linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)",
              color: "#fff",
              mt: 2,
              pl: 1,
            }}>
            <Typography
            id="modal-modal-title"
            
            variant="h6"
            component="h2">
            {gameName}
            
          </Typography>
          <Typography>
              <button>X</button>
            </Typography>
            </Box>
          
          <Typography
            className="main_casino_modals"
            id="modal-modal-description">
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
      </Modal>
    </>
  );
};

export default CasinoRule;
