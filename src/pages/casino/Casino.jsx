import Title from "../../component/inPlay/Title";
import CasinoList from "./CasinoList";
import CasinoCard from "../../component/casinoCard/CasinoCard";
////styles
import "./style.scss";
import {
  FgameData,
  LiveCasino,
  Lottry,
  fantsyGameList,
  slotProviderList,
} from "./QtechProvider";
import { useEffect, useMemo, useState } from "react";
import {
  useProviderMutation,
  useQtechAuthQuery,
  useQtechMutation,
} from "../../Services/Qtech/Qtech";
import { useNavigate, useParams } from "react-router-dom";
import FantasyGameCard from "../../component/casinoCard/FantasyCard";
import ModalComponent from "../../component/modal/Modal";
import CasinoRuleModalContent from "../../component/casinoRuleModalContent/CasinoRuleModalContent";
import { useCasinoRulesMutation } from "../../Services/auraCasino/AuraCasino";
import { AllCasinoProviderName } from "../../component/allCasino/superNowaProvider";
import { useAllotedCasinoMutation } from "../../Services/allotedCasino/AllotedCasino";
import { isLoginSelector } from "../../App/LoginSlice";
import { useSelector } from "react-redux";

const Casino = () => {
  const [gameCode, setGameCode] = useState("");
  const [category, setCategory] = useState([]);
  const [gameLists, setGameLists] = useState([]);
  const [providerFilter, setProviderFilter] = useState("ALL");
  const { id } = useParams();
  const QtechAutch = useQtechAuthQuery();
  const isLogin = useSelector(isLoginSelector);
  const [trigger, { data: gamelist, isLoading }] = useQtechMutation();
  const [providerTrigger, { data: providerdata }] = useProviderMutation();
  const [triger, { data: allotedCasino }] = useAllotedCasinoMutation();

  useEffect(() => {
    if (isLogin) {
      triger();
    }
  }, []);
  useEffect(() => {
    providerTrigger({ gameType: id });
  }, [id]);

  useEffect(() => {
    const casinoToken = localStorage.getItem("casino-token");
    // if (casinoToken != undefined || gameCode) {
    // setGameCode("");
    trigger({
      gameCategory: id.toUpperCase(),
      provider: gameCode,
      token: casinoToken,
      // currency: "IN5",
    });
    // }
  }, [gameCode, QtechAutch.isSuccess, id]);

  useEffect(() => {
    if (gamelist) {
      const { items } = gamelist.data;
      let categories = items.map((el) => {
        const itemAr = el?.category.split("/");
        const lastelm = itemAr[itemAr.length - 1];
        return lastelm;
      });
      const uniqueArrayValues = Array.from(new Set(categories));
      // if (uniqueArrayValues.length) {
      uniqueArrayValues.unshift("ALL");
      const newAr = uniqueArrayValues.filter((el) => el !== "OTHER");
      // newAr.push("OTHER");
      setCategory(newAr);
      // }
      setGameLists(items);
      //
    }
  }, [gameCode, providerFilter, id, gamelist]);

  const casinoObj = {
    Lottery: Lottry,
    LiveCasino: LiveCasino,
    Slot: slotProviderList,
    FantasyGame: FgameData,
  };

  const [fantasyGameActive, setFantasyGameActive] = useState("SPB");
  const [fantasyGame, setfantasyGame] = useState([]);
  useEffect(() => {
    if (id == "FantasyGame") {
      const fantasygamelist = fantsyGameList?.filter(
        (item) => item.providerId == fantasyGameActive
      );
      setfantasyGame(fantasygamelist);
    }
  }, [id]);
  const [casinoRuleModal, setCasinoRuleModal] = useState(false);
  const [gameId, setGameId] = useState();
  const [casinoName, setCasinoName] = useState("");
  useEffect(() => {
    setProviderFilter("ALL");
  }, [id]);
  const [trigge, { data, isLoading: isLoad, isError }] =
    useCasinoRulesMutation();
  useEffect(() => {
    trigge();
  }, []);
  const points = {
    LiveCasino: data?.data?.qtech,
    FantasyGame: data?.data?.fantasyGames,
    Slot: data?.data?.qtech,
    Lottery: data?.data?.qtech,
    aura: data?.data?.aura,
  };

  const indianCasino = {
    "Indian-Casino": "Indian Casino",
  };

  const nav = useNavigate();
  const indianCasinoCat = {
    Aura: { name: "Aura", gameCode: "AURA", PageUrl: "/casino-list" },
    "Super nowa": {
      name: "Super nowa",
      gameCode: "SP-NOWA",
      PageUrl: "/SuperNowa_casion",
    },
  };

  const handleGamePageroute = (val) => {
    nav(val?.PageUrl, {
      state: {
        item1: { gameCode: val?.gameCode },
        item2: window.location.pathname,
      },
    });
  };
  const [trigg, { data: allotedCasin }] = useAllotedCasinoMutation();
  useEffect(() => {
    if (isLogin) {
      trigg();
    }
  }, []);
  // console.log(category, "category");
  const allowCasino = useMemo(
    () =>
      AllCasinoProviderName[indianCasino[id]]?.map((item) => {
        if (item?.name == "Aura") {
          return {
            ...item,
            active: allotedCasino?.data?.find((item) => item.casinoId == 1)
              .active,
          };
        } else {
          return {
            ...item,
            active: allotedCasino?.data?.find((item) => item.casinoId == 2)
              .active,
          };
        }
      }),
    [allotedCasino, indianCasino]
  );
  return (
    <div>
      {casinoRuleModal && points[id] == 1 ? (
        nav(`/qtech/${casinoName}`)
      ) : (
        <ModalComponent
          Elememt={
            <CasinoRuleModalContent
              gameId={gameId}
              id={id}
              points={points}
              gameName={casinoName}
              data={data}
              handleClose={() => setCasinoRuleModal(false)}
            />
          }
          open={casinoRuleModal}
          setOpen={setCasinoRuleModal}
        />
      )}
      <div className="casino-page-container">
        <Title name={id} />
        <div className="casino-center-col">
          {/* <p className="int_casino">Int Casino</p> */}
          <p className="int_casino">{id }</p>
          {id == "Indian-Casino" ? (
            <div className="main_wrap_live-casion">
              {allowCasino &&
                allowCasino?.map((item) => {
                  if (item?.active) {
                    return (
                      <div
                        className="MainBtn_warp"
                        style={{ border: "0.5px solid" }}
                        key={item?.name + item?.logo}
                        onClick={() =>
                          handleGamePageroute(indianCasinoCat[item?.name])
                        }
                      >
                        <img
                          className="complany-logo-warp"
                          src={item?.logo}
                          alt=""
                        />
                        <span className="complany-name-wrap">{item.name}</span>
                      </div>
                    );
                  } else {
                    return;
                  }
                })}
            </div>
          ) : (
            //
            <>
              <CasinoList
                list={providerdata?.data || casinoObj[id]}
                setGameCode={setGameCode}
                type={1}
                id={id}
                setFantasyGame={setFantasyGameActive}
                setProviderFilter={setProviderFilter}
              />
              {id != "FantasyGame" && (
                <CasinoList
                  list={category}
                  type={2}
                  id={id}
                  setGameCode={setGameCode}
                  setFantasyGame={setFantasyGameActive}
                  setProviderFilter={setProviderFilter}
                />
              )}
              <div className="casino_card_container">
                {id == "FantasyGame" ? (
                  <FantasyGameCard
                    gameLists={fantasyGame}
                    setCasinoName={setCasinoName}
                    setCasinoRuleModal={setCasinoRuleModal}
                  />
                ) : (
                  <CasinoCard
                    list={category}
                    gameLists={gameLists}
                    setCasinoName={setCasinoName}
                    setCasinoRuleModal={setCasinoRuleModal}
                    providerFilter={providerFilter}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Casino;
