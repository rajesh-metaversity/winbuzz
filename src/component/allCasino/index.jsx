import React, { useState } from "react";
import "./styles.css";

import { useNavigate } from "react-router";
import ModalComponent from "../modal/Modal";

import LoginForm from "../loginForm/LoginForm";
import { AllCasinoProviderName } from "./superNowaProvider";
import { useCasinoRulesMutation } from "../../Services/auraCasino/AuraCasino";
import { useEffect } from "react";
import CasinoRuleModal2 from "../casinoRuleModalContent/CasinoRuleModal2";
import {  useAllotedCasinoQuery } from "../../Services/allotedCasino/AllotedCasino";
import { useSelector } from "react-redux";
import { isLoginSelector } from "../../App/LoginSlice";
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
  const [point, setPoint] = useState("");

  const points = {
    livecasino: data?.data?.qtech,
    fantasygame: data?.data?.fantasyGames,
    slot: data?.data?.qtech,
    lottery: data?.data?.qtech,
    AURA: data?.data?.aura,
    "Internation Casino": data?.data?.aura,
    "SP-NOWA": data?.data?.supernowa,
  };
  const handleGamePageroute = (vl, val, key, gameCode) => {
    setGameName(gameCode);
    if (key === "Internation Casino") {
      // setAllDatta(val);
      setModalValue(1);
      setCasinoRuleModal(true);
    } else {
      if (localStorage.getItem("token")) {
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
  const isLogin = useSelector(isLoginSelector);
  const [link, setLink] = useState("");
  // const{ data: allotedCasino } = useAllotedCasinoQuery({
    
  // },{
  //   skip:!isLogin
  // });
  // useEffect(() => {
  //   if (isLogin) {
  //     trigg();
  //   }
  // }, []);
  const modalElement = {
    0: <LoginForm setOpen={setOpen} handleClose={handleClose} />,
    1: (
      <CasinoRuleModal2
        handleClose={handleClose}
        id={id}
        points={point}
        // points={points[id]}
        data={data}
        link={link}
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
  // console.log(AllCasinoProviderName, "AllCasinoProviderName");
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
                      setPoint(points[item?.gameCode] || data?.data?.qtech);
                      setLink(
                        key == "Indian Casino"
                          ? item?.gameCode == "AURA"
                            ? `/casino-list`
                            : `/supernowaCasino`
                          : `/qtech/${item?.gameCode}`
                      );
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
