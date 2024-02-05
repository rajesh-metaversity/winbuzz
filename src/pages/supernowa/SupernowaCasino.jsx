import React, { useEffect, useState } from "react";
import {
  useSupernowaAuthenticationMutation,
  useSupernowaCasinoGameListQuery,
} from "../../Services/supernowa/SupernowaCasino";
import "./style.scss";
import Loader from "../../component/Loader/Loader";
import { Box, Grid, useMediaQuery } from "@mui/material";
import ModalComponent from "../../component/modal/Modal";
import CasinoRuleModalContent from "../../component/casinoRuleModalContent/CasinoRuleModalContent";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useCasinoRulesMutation } from "../../Services/auraCasino/AuraCasino";
const SupernowaCasino = () => {
  const [gameName, setGameName] = useState("");
  const [isSupernowa, setIsSuperNowa] = useState(true);
  const [casinoRuleModal, setCasinoRuleModal] = useState(false);
  const [trigger, { data, isLoading: laoding }] = useCasinoRulesMutation();
  const { data: gameListData, isLoading } = useSupernowaCasinoGameListQuery({});
  const [gameCodev, setGameCode] = useState("");
  const [gameIdv, setGameId] = useState("");

  const nav = useNavigate();
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  const handleSuperNowaClick = (gameCode, gameId) => {
    const gameIDv = gameId || gameIdv;
    const gameCodef = gameCode || gameCodev;
    setIsSuperNowa(false);
    nav(`/super-nowa/${gameCodef}/${gameIDv}`);
  };

  const handleClose = () => {
    setCasinoRuleModal(false);
  };

  const handlerClick = (gameCode, providerCode, gameN) => {
    setGameName(gameN);
    setGameCode(gameCode);
    setGameId(providerCode);
    setCasinoRuleModal(true);
  };

  const handlerGoBack = () => {
    handleClose();
  };

  const handlerNavigate = () => {
    nav("/");
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
      {isLoading ? (
        <Loader />
      ) : (
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            paddingInline: "2px",
            gap: "2px",
          }}
        >
          {/* <CloseIcon
            sx={{
              padding: "10px 0",
              backgroundColor: "#B88831",
              color: "#ffffff",
              fontSize: 16,
              cursor: "pointer",
              width: "100%",
            }}
            onClick={handlerNavigate}
          /> */}
          {gameListData?.data?.games.map((games, index) => (
            <Grid
              key={index}
              xs={5.9}
              md={2.9}
              item
              sx={{ cursor: "pointer", overflow: "hidden" }}
              onClick={() => {
                handlerClick(games?.code, games?.providerCode, games?.name);
                if (data?.data?.supernowa == 1) {
                  handleSuperNowaClick(games?.code, games?.providerCode);
                }
              }}
            >
              <img
                src={games?.thumb}
                alt=""
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <ModalComponent
        Elememt={
          isSupernowa && (
            <CasinoRuleModalContent
              handleClose={handleClose}
              gameName={gameName}
              isSupernowa={isSupernowa}
              points={points}
              data={data}
              id={""}
              handleSuperNowaClick={handleSuperNowaClick}
            />
          )
        }
        open={casinoRuleModal}
        setOpen={setCasinoRuleModal}
      />
    </>
  );
};

export default SupernowaCasino;
