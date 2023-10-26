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

const GameDetail = () => {
  const { id } = useParams();
  const [odds, setOdds] = useState({});
  const [prevOdds, setPrevOdds] = useState({});

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

  const {data} = useMyIpQuery();


  console.log(data, "sdadasa")


  return (
    <div className="game_detail-cont">
      <div className="game-detail-left-col">
        <Iframes odds={odds } />
        <MatchedDetailBetComp  data={odds}/>
        <BookMaker data={odds?.Bookmaker}/>
        <FancyTabs  data={odds}/>
      </div>
      <div className="game-detail-right-col">
        <MyBetsModule />
        <WebBetPlaceModule />
      </div>
    </div>
  );
};
export default GameDetail;
