import React from "react";
import MatchedDetailBetComp from "../../component/matchedDetail/MatchedDetailBetComp";
import BookMaker from "../../component/BookMaker/BookMaker";
import Iframes from "../../component/Iframes/Iframes";
import { WebBetPlaceModule } from "../../component/betPlaceModule/BetPlaceModule";
import MyBetsModule from "../../component/myBetsModule/MyBetsModule";

const MultiMarketDetails = ({matchName, data}) => {
    console.log(data?.Bookmaker, "sdfdsfsdffds")
  return (
    <>
    


<div className="game_detail-cont">
      <div className="game-detail-left-col">
      <Iframes odds={data} id={1}/>
      <MatchedDetailBetComp
        matchName={matchName}
        // minMax={minMax}
        // setMinMax={setMinMax}
        // prevOdds={prevOdds}
        // ip={data?.ip}
        data={data}
        // showId={1}
        // PnlOdds={oddsPnl?.data}
        // handleFavSec={handleFavSec}
        // handleFavDel={handleFavDel}
        // favData={fav?.data}
      />
      <BookMaker
        //   minMax={minMax}
        //   prevOdds={prevOdds?.Bookmaker}
        //   setMinMax={setMinMax}
        //   ip={data?.ip}
          data={data?.Bookmaker}
        //   showId={2}
        //   PnlOdds={oddsPnl?.data}
        //   favData={fav?.data}
        //   handleFavDel={handleFavDel}
        //   handleFavSec={handleFavSec}
        />
      </div>
      <div className="game-detail-right-col">
        <WebBetPlaceModule minMax={""} />
        <MyBetsModule />
      </div>
    </div>

    </>
    
  );
};

export default MultiMarketDetails;
