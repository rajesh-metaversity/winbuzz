import React, { useState } from "react";
import "./styles.css";

import { useNavigate } from "react-router";
import ModalComponent from "../modal/Modal";
import CasinoRuleModalContent from "../../component/casinoRuleModalContent/CasinoRuleModalContent";
import LoginForm from "../loginForm/LoginForm";
import { AllCasinoProviderName } from "./superNowaProvider";
import { useCasinoRulesMutation } from "../../Services/auraCasino/AuraCasino";
import { useEffect } from "react";
// import Modal from "react-bootstrap/Modal";
// import CasinoModals from "../../Livecasino/CasinoModals";

const AllProviderName = () => {
  const [casinoRuleModal, setCasinoRuleModal] = useState(false);
  const [modalValue, setModalValue] = useState(0);
  const [gameName, setGameName] = useState();
  const [casinoName, setCasinoName] = useState("");
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [allDatta, setAllDatta] = useState();
  const [id, setId] = useState("");

  const [trigge, { data, isLoading: isLoad, isError }] =
    useCasinoRulesMutation();
  const [open, setOpen] = useState(false);
  const points = {
    LiveCasino: data?.data?.qtech,
    FantasyGame: data?.data?.fantasyGames,
    Slot: data?.data?.qtech,
    Lottery: data?.data?.qtech,
    aura: data?.data?.aura,
    "Internation Casino": data?.data?.aura,
  };
  const handleGamePageroute = (vl, val, key, gameCode) => {
    setGameName(gameCode);
    if (key === "Internation Casino") {
      // setAllDatta(val);
      setModalValue(1);
      setCasinoRuleModal(true);
    } else {
      if (localStorage.getItem("token")) {
        console.log(vl, val, "gameCode");
        navigate(vl, {
          state: {
            item1: { gameCode: val?.gameCode },
            item2: window.location.pathname,
          },
        });
        setModalValue(1);
      } else {
        setModalValue(0);
      }
    }
    setCasinoRuleModal(true);
  };

  const handleAgree = () => {
    if (localStorage.getItem("token")) {
      navigate(allDatta?.PageUrl, {
        state: {
          item1: { gameCode: allDatta?.gameCode },
          item2: window.location.pathname,
        },
      });
      setModalValue(1);
    } else {
      setModalValue(0);
    }
    setCasinoRuleModal(true);
  };
  const handleClose = () => {
    setCasinoRuleModal(false);
  };
  const modalElement = {
    0: <LoginForm setOpen={setOpen} handleClose={handleClose} />,
    1: (
      <CasinoRuleModalContent
        handleClose={handleClose}
        id={id}
        points={points}
        // points={points[id]}
        gameName={gameName}
      />
    ),
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      trigge();
    }
  }, []);
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="Main_header_for_game_provide_Incasino">
      {Object.keys(AllCasinoProviderName).map((key, item) => {
        return (
          <div
            className="Inner_header_for_game_provide_Incasin"
            key={key + item}
          >
            <h3 className="provider_name_details">{key}</h3>
            <div className="main_wrap_live-casion">
              {AllCasinoProviderName &&
                AllCasinoProviderName[key].map((item, index) => (
                  <div
                    className="MainBtn_warp"
                    style={{ border: "0.5px solid" }}
                    onClick={() => {
                      setId(key);
                      if (token) {
                        handleGamePageroute(
                          item?.PageUrl,
                          item,
                          key,
                          item?.gameCode
                        );
                      } else {
                        setModalValue(0);
                        setCasinoRuleModal(true);
                      }
                    }}
                    key={item.PageUrl + key}
                  >
                    <img
                      className="complany-logo-warp"
                      src={item?.logo}
                      alt=""
                    />
                    <span className="complany-name-wrap">{item?.name}</span>
                  </div>
                ))}
            </div>
          </div>
        );
      })}

      {casinoRuleModal && points[id] == 1 ? (
        nav(`/qtech/${"casino"}`)
      ) : (
        <ModalComponent
          Elememt={
            // <CasinoRuleModalContent
            //   // gameId={gameId}
            //   // id={id}
            //   // gameName={casinoName}
            //   handleClose={() => setCasinoRuleModal(false)}
            // />
            modalElement[modalValue]
          }
          open={casinoRuleModal}
          setOpen={setCasinoRuleModal}
        />
      )}
    </div>
  );
};

export default AllProviderName;
