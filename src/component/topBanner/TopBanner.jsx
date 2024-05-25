///styles
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useBannerListDataMutation } from "../../Services/BannerList/BannerList";
import { AllCasinoProviderName } from "../allCasino/superNowaProvider";
import { useNavigate } from "react-router-dom";
import { useAllotedCasinoQuery } from "../../Services/allotedCasino/AllotedCasino";
import { isLoginSelector } from "../../App/LoginSlice";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";

import {
  useCasinoIframeMutation,
  useGameLobbyMutation,
} from "../../Services/Qtech/Qtech";
import { Modal, Typography } from "@mui/material";
import { isSelfData } from "../../layout/header/Header";
import { isBrowser } from "react-device-detect";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TopBanner = () => {
  // const isBreakPoint = useMediaQuery("(max-width: 780px)");
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: isBreakPoint ? 1 : 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 500,
  //   cssEase: "linear",
  //   arrows: false,
  //   pauseOnHover: true,
  // };
  const isLogin = useSelector(isLoginSelector);
  const [open, setOpen] = useState(false);
  const [gameName, setGameName] = useState("");
  const [trigger, { data }] = useBannerListDataMutation();
  useEffect(() => {
    trigger({
      type: 1,
    });
  }, []);

  const newArraya = [
    // ...AllCasinoProviderName["Indian Casino"],
    ...AllCasinoProviderName["Internation Casino"],
  ];

  const nav = useNavigate();

  const [gameLobby, { data: gameData }] = useGameLobbyMutation();

  const qtechData = {
    playerId: "121212",
    currency: "INR",
    country: "IN",
    gender: "M",
    birthDate: "1986-01-01",
    lang: "en_IN",
    mode: "real",
    device: "desktop",
    returnUrl: `https://${window.location.hostname}`,
    token: localStorage.getItem("casino-token"),
    walletSessionId: localStorage.getItem("token"),
  };

  const [aviator, { data: avitorData }] = useCasinoIframeMutation();
  const aviatorDataPayload = {
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
    walletSessionId: localStorage.getItem("casino-token"),
    token: localStorage.getItem("casino-token"),
    gameName: "SPB-aviator",
  };
  const navHndler = (game, gameCodeName) => {
    setGameName(game);
    if (game == "Super nowa") {
      nav("/SuperNowa_casion");
    } else if (game == "Aura") {
      nav("casino-list");
    } else {
      nav(`/casino/LiveCasino/${gameCodeName}`);
    }
    if (game == "Q Tech") {
      gameLobby(qtechData);
      setOpen(true);
    } else if (game == "AVIATOR") {
      aviator(aviatorDataPayload);
      setOpen(true);
    }
  };
  const { data: allotedCasino } = useAllotedCasinoQuery(
    {},
    {
      skip: !isLogin,
    }
  );

  const handleNav = () => {
    setOpen(false);
    nav("/");
  };
  // const handleClose = () => setOpen(false);

  return (
    <>
      <div className="top-banner-container-1">
        {newArraya?.map((item, key) => {
          if (
            (item?.gameCode == "AURA" &&
              allotedCasino?.data?.find((item) => item?.name == "Aura")
                ?.active) ||
            (item?.gameCode == "SP-NOWA" &&
              allotedCasino?.data?.find((item) => item?.name == "Super Nova")
                ?.active) ||
            (!["AURA", "SP-NOWA"].includes(item?.gameCode) &&
              allotedCasino?.data?.find((item) => item?.name == "QTech")
                ?.active)
          ) {
            return (
              <div
                className="top-banner-img-col"
                key={key + item}
                onClick={() => navHndler(item?.name, item?.gameCodeName)}>
                <div
                  className="img"
                  style={{ border: "0.5px solid" }}
                  key={item.PageUrl + key}>
                  <img className="complany-logo-warp" src={item?.logo} alt="" />
                  <span className="complany-name-wrap">{item?.name}</span>
                  <a
                    // _ngcontent-ugj-c101=""
                    href="javascript:void(0);"
                    className="home-animated">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> play now
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
      {(gameData?.data?.url || avitorData?.data?.url) && (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Typography
              className="main_casino_modals"
              id="modal-modal-description">
              <div className="casino-iframe-header">
                <div className="casino-iframe-header-left-col">
                  <span onClick={() => handleNav()}>
                    <HomeIcon />
                  </span>
                  <img
                    src={isSelfData?.data?.logo}
                    alt=""
                    onClick={() => handleNav()}
                  />
                  
                </div>
                <div className="casino-iframe-header-right-col"> <span style={{paddingRight:"12px", color:"#fff"}}>{localStorage.getItem("userId")}</span></div>
              </div>
              <div className="casino-iframe">
                <iframe
                  src={
                    gameName == "AVIATOR"
                      ? avitorData?.data?.url
                      : gameData?.data?.url
                  }
                  frameBorder="0"></iframe>
              </div>
            </Typography>
          </Modal>
        </>
      )}
    </>
  );
};

export default TopBanner;
