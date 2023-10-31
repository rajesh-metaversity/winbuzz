import { useEffect, useState } from "react";
import Iframes from "../../component/Iframes/Iframes";
import { WebBetPlaceModule } from "../../component/betPlaceModule/BetPlaceModule";
import MyBetsModule from "../../component/myBetsModule/MyBetsModule";
import MatchedDetailBetComp from "../../component/matchedDetail/MatchedDetailBetComp";
import "./styles.scss";
import { socket } from "./Socket";
import { useParams } from "react-router-dom";
import BookMaker from "../../component/BookMaker/BookMaker";
import FancyTabs from "../../component/fancy/FancyTabs";
import { useMyIpQuery } from "../../Services/ActiveSportList/ActiveMatch";
import { useFancyPnlQuery, useOddsPnlQuery } from "../../Services/Pnl/Pnl";

const GameDetail = () => {
  const { id } = useParams();
  const [odds, setOdds] = useState({});
  const [prevOdds, setPrevOdds] = useState({});
  const [minMax, setMinMax] = useState({
    minBet: "",
    maxBet: "",
  });

  useEffect(() => {
    socket.on("OddsUpdated", (e) =>
      setOdds((odds) => {
        e["All"] = e
          ? Object.keys(e).reduce(
              (ac, key) =>
                ["Odds", "All", "Bookmaker"].includes(key)
                  ? ac
                  : [...ac, ...e[key]],
              []
            )
          : [];

        if (JSON.stringify(odds) !== JSON.stringify(e)) {
          if (Object.keys(odds)?.length) {
            const newOdds = { ...odds };
            setPrevOdds(newOdds);
          } else {
            setPrevOdds(e);
          }
        }
        return e;
      })
    );
  }, [id]);

  useEffect(() => {
    socket.emit("JoinRoom", {
      eventId: id,
    });
  }, [id]);

  const { data } = useMyIpQuery();
  const { data: oddsPnl } = useOddsPnlQuery({ matchId: id });
  const { data: FancyPnl } = useFancyPnlQuery({ matchId: id });

  return (
    <div className="game_detail-cont">
      <div className="game-detail-left-col">
        <Iframes odds={odds} />
        <MatchedDetailBetComp
          minMax={minMax}
          setMinMax={setMinMax}
          prevOdds={prevOdds}
          ip={data?.ip}
          data={odds}
          showId={1}
          PnlOdds={oddsPnl?.data}
        />
        <BookMaker
          minMax={minMax}
          prevOdds={prevOdds?.Bookmaker}
          setMinMax={setMinMax}
          ip={data?.ip}
          data={odds?.Bookmaker}
          showId={2}
          PnlOdds={oddsPnl?.data}
        />
        <FancyTabs
          minMax={minMax}
          prevOdds={prevOdds}
          setMinMax={setMinMax}
          data={odds}
          ip={data?.ip}
          showId={3}
          fancyPnl={FancyPnl?.data}
        />
      </div>
      <div className="game-detail-right-col">
        <WebBetPlaceModule minMax={minMax} />
        <MyBetsModule />
      </div>
    </div>
  );
};
export default GameDetail;
