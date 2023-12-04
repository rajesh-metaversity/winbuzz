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
import { useEffect, useState } from "react";
import {
  useQtechAuthQuery,
  useQtechMutation,
} from "../../Services/Qtech/Qtech";
import { useParams } from "react-router-dom";
import FantasyGameCard from "../../component/casinoCard/FantasyCard";
import ModalComponent from "../../component/modal/Modal";
import CasinoRuleModalContent from "../../component/casinoRuleModalContent/CasinoRuleModalContent";

const Casino = () => {
  const [gameCode, setGameCode] = useState("");
  const [category, setCategory] = useState([]);
  const [gameLists, setGameLists] = useState([]);
  const [providerFilter, setProviderFilter] = useState("ALL");
  const QtechAutch = useQtechAuthQuery();
  const [trigger, { data: gamelist, isLoading }] = useQtechMutation();
  const { id } = useParams();
  useEffect(() => {
    const casinoToken = localStorage.getItem("casino-token");
    // if (casinoToken != undefined || gameCode) {
    // setGameCode("");
    trigger({
      gameCategory: id.toUpperCase(),
      provider: gameCode,
      token: casinoToken,
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
    }
  }, [gameCode, id, gamelist]);
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
  }, [id, fantasyGame]);
  const [casinoRuleModal, setCasinoRuleModal] = useState(false);
  const [gameId, setGameId] = useState();
  const [casinoName, setCasinoName] = useState("");
  return (
    <div>
      <ModalComponent
        Elememt={
          <CasinoRuleModalContent
            gameId={gameId}
            id={id}
            gameName={casinoName}
            handleClose={() => setCasinoRuleModal(false)}
          />
        }
        open={casinoRuleModal}
        setOpen={setCasinoRuleModal}
      />
      <div className="casino-page-container">
        <Title name={"INT CASINO"} />
        <div className="casino-center-col">
          <p className="int_casino">Int Casino</p>

          <CasinoList
            list={casinoObj[id]}
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
        </div>
      </div>
    </div>
  );
};

export default Casino;
