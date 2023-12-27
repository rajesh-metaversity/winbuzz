import React, { useEffect, useState } from "react";

import "./style.scss";

import ModalComponent from "../../component/modal/Modal";
import CasinoRuleModalContent from "../../component/casinoRuleModalContent/CasinoRuleModalContent";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";
import { useCasinoRulesMutation } from "../../Services/auraCasino/AuraCasino";
import { Grid } from "@mui/material";

const AuraCasinoGamePage = () => {
  const [gameName, setGameName] = useState("");
  const [isAura, setIsAura] = useState(true);
  const [casinoId, setCasinoId] = useState(0);
  const [casinoRuleModal, setCasinoRuleModal] = useState(false);
  const { id } = useParams();
  const url =
    "https://admin-api-banners-new.s3.ap-south-1.amazonaws.com/wolf.json";
  const [cards, setCards] = useState([]);
  const [trigger, { data, isLoading }] = useCasinoRulesMutation();
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCards(data?.data);
      });
  }, []);
  const nav = useNavigate();

  const handleAuraClick = () => {
    setIsAura(false);
  };

  const handleClose = () => {
    setCasinoRuleModal(false);
  };

  const handlerGoBack = () => {
    handleClose();
  };

  const handlerNavigate = () => {
    nav("/");
  };

  const handleClickOpen = (id, gameN) => {
    setCasinoId(id);
    setCasinoRuleModal(true);
    setGameName(gameN);
  };
  const points = {
    LiveCasino: data?.data?.qtech,
    FantasyGame: data?.data?.fantasyGames,
    Slot: data?.data?.qtech,
    Lottery: data?.data?.qtech,
    aura: data?.data?.aura,
  };

  useEffect(() => {
    trigger();
  }, []);

  return (
    <>
      {
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            paddingInline: "2px",
            gap: "2px",
          }}
        >
          <CloseIcon
            sx={{
              padding: "10px 0",
              backgroundColor: "#B88831",
              color: "#ffffff",
              fontSize: 16,
              cursor: "pointer",
              width: "100%",
            }}
            onClick={handlerNavigate}
          />
          {cards?.map((games, index) => (
            <Grid
              key={index}
              xs={5.9}
              md={2.9}
              item
              sx={{ cursor: "pointer", overflow: "hidden" }}
              onClick={() => handleClickOpen(games?.gameId, games?.gameName)}
            >
              <img
                src={games?.imageUrl}
                alt=""
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      }

      <ModalComponent
        Elememt={
          <CasinoRuleModalContent
            handleClose={handleClose}
            gameName={gameName}
            gameId={casinoId}
            data={data}
            points={points}
          />
        }
        open={casinoRuleModal}
        setOpen={setCasinoRuleModal}
      />
    </>
  );
};

export default AuraCasinoGamePage;
