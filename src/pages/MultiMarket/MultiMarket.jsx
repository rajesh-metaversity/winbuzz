import { useEffect } from "react";
import { WebBetPlaceModule } from "../../component/betPlaceModule/BetPlaceModule";
import MatchedDetailBetComp from "../../component/matchedDetail/MatchedDetailBetComp";
import {
  useFavListMutation,
  useUserFavMutation,
} from "../../Services/Favourite/Favourite";

const MultiMarket = () => {
  const [trigger, { data }] = useFavListMutation();
  const [userFav, { data: fav }] = useUserFavMutation();

  useEffect(() => {
    trigger({});

    userFav({});
  }, []);

  return (
    <div className="game_detail-cont">
      <div className="game-detail-left-col">
        <MatchedDetailBetComp
        //   minMax={minMax}
        //   setMinMax={setMinMax}
        //   prevOdds={prevOdds}
        //   ip={data?.ip}
        //   data={odds}
        //   showId={1}
        //   PnlOdds={oddsPnl?.data}
        //   handleFavSec={handleFavSec}
        //   handleFavDel={handleFavDel}
        //   favData={fav?.data}
        />
      </div>
      <div className="game-detail-right-col">
        <WebBetPlaceModule
        // minMax={minMax}
        />
        {/* <MyBetsModule /> */}
      </div>
    </div>
  );
};

export default MultiMarket;
