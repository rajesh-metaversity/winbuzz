import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import casinoImd from "../../assets/img/casinoImg.png";
import { useCasinoRulesMutation } from "../../Services/auraCasino/AuraCasino";
import "./styles.scss";
import { Link } from "react-router-dom";
const CasinoRuleModalContent = ({
  handleClose,
  gameId,
  id,
  gameName,
  isSupernowa,
  points,
  handleSuperNowaClick,
  data,
}) => {
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  const style = {
    width: isBreakPoint ? "100%" : 400,
    background: "linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)",
    boxShadow: 24,
    p: isBreakPoint ? 0 : 2,
    pb: isBreakPoint ? 2 : 2,
  };
  // console.log(points, id, "data");
  // const [trigger, { data, isLoading, isError }] = useCasinoRulesMutation();
  // useEffect(() => {
  //   trigger();
  // }, []);
  return (
    <>
      <Box sx={style}>
        <Typography
          className="main_casino_modals"
          id="modal-modal-description"
          sx={{ mt: 2 }}
        >
          <div className="casino_images_modals">
            <img src={casinoImd} alt="" />
          </div>
          <div className="casino_message">
            <p className="please_note">Please Note</p>
            <p className="points">
              (1 Points = ₹{isSupernowa ? data?.data?.supernowa : points[id]})
            </p>

            <div className="casino_dis">
              <p>
                <span>For Example:</span> If you place ₹100 your bet will be ₹
                {100 * isSupernowa ? data?.data?.supernowa : points[id]} Win or
                Loss according to the above calculation.
              </p>
              <p>
                यदि आप ₹100 लगाते हैं तो उपरोक्त गणना के अनुसार आपकी शर्त जीत या
                हार ₹
                {100 * Number(isSupernowa ? data?.data?.supernowa : points[id])}
                होगी।
              </p>
            </div>
          </div>
        </Typography>
        <div className="agree_btn">
          {isSupernowa ? (
            <button
              onClick={() => {
                // handleClose();
                handleSuperNowaClick();
              }}
              className="agree"
            >
              Ok I Agree
            </button>
          ) : id && id != "aura" ? (
            <Link to={`/qtech/${gameName}`}>
              <button>Ok I Agree</button>
            </Link>
          ) : (
            <Link to={`/aura/${gameName}/${gameId}`}>
              <button>Ok I Agree</button>
            </Link>
          )}
          <button onClick={handleClose}>No, I Don't Agree</button>
        </div>
      </Box>
    </>
  );
};

export default CasinoRuleModalContent;
