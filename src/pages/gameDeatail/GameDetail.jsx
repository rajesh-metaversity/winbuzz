import Iframes from "../../component/Iframes/Iframes";
import { WebBetPlaceModule } from "../../component/betPlaceModule/BetPlaceModule";
import FancyBetComp from "../../component/fancy/FancyBetComp";
import MatchedDetailBetComp from "../../component/matchedDetail/MatchedDetailBetComp";
import "./styles.scss";

const GameDetail = () => {
  return (
    <div className="game_detail-cont">
      <div className="game-detail-left-col">
        <Iframes />
        <MatchedDetailBetComp />
        <FancyBetComp />
      </div>
      <div className="game-detail-right-col">
        <WebBetPlaceModule />
      </div>
    </div>
  );
};
export default GameDetail;
