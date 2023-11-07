import React, { useEffect, useState } from "react";
import MatchedDetailBetComp from "../../component/matchedDetail/MatchedDetailBetComp";
import BookMaker from "../../component/BookMaker/BookMaker";
import Iframes from "../../component/Iframes/Iframes";
import { WebBetPlaceModule } from "../../component/betPlaceModule/BetPlaceModule";
import MyBetsModule from "../../component/myBetsModule/MyBetsModule";
import {
  useCreateFavMutation,
  useDeleteFavMutation,
  useUserFavMutation,
} from "../../Services/Favourite/Favourite";
import { useMyIpQuery } from "../../Services/ActiveSportList/ActiveMatch";
import FancyTabs from "../../component/fancy/FancyTabs";
import { useFancyPnlQuery, useOddsPnlQuery } from "../../Services/Pnl/Pnl";
const MultiMarketDetails = ({
  matchName,
  data,
  id,
  minMax,
  setMinMax,
  setmatchId,
}) => {
  const [userFav, { data: fav }] = useUserFavMutation();
  const [trigger, { data: createFav }] = useCreateFavMutation();
  const [deletedData, { data: deleteFav }] = useDeleteFavMutation();
  const { data: oddsPnl } = useOddsPnlQuery({ matchId: id });
  const { data: FancyPnl } = useFancyPnlQuery({ matchId: id });
  const [odds, setOdds] = useState({});
  const [prevOdds, setPrevOdds] = useState({});
  const { data: ipData } = useMyIpQuery();
  console.log(ipData, "dsfsdfsdfs");
  const handleFavSec = (marketId) => {
    trigger({
      marketId: marketId,
      matchId: id,
    });
  };
  const handleFavDel = (marketId) => {
    deletedData({
      marketId: marketId,
      matchId: id,
    });
  };
  useEffect(() => {
    userFav({
      matchId: id,
    });
  }, [id]);
  useEffect(() => {
    userFav({
      matchId: id,
    });
  }, [createFav?.data, deleteFav?.data]);
  useEffect(() => {
    if (data) {
      const newData = { ...data };
      newData["All"] = newData
        ? Object.keys(newData).reduce(
            (ac, key) =>
              ["Odds", "All", "Bookmaker"].includes(key)
                ? ac
                : [...ac, ...newData[key]],
            []
          )
        : [];
      if (JSON.stringify(odds) !== JSON.stringify(newData)) {
        if (Object.keys(odds)?.length) {
          const newOdds = { ...odds };
          setPrevOdds(newOdds);
        } else {
          setPrevOdds(newData);
        }
      }
      setOdds(newData);
    }
  }, [data]);
  return (
    <>
      <Iframes odds={data} id={1} />
      <MatchedDetailBetComp
        matchName={matchName}
        minMax={minMax}
        setMinMax={setMinMax}
        prevOdds={prevOdds}
        ip={ipData?.ip}
        data={odds}
        showId={1}
        PnlOdds={oddsPnl?.data}
        handleFavSec={handleFavSec}
        handleFavDel={handleFavDel}
        favData={fav?.data}
        matId={id}
        setmatchId={setmatchId}
      />
      {data?.Bookmaker?.length != 0 && (
        <BookMaker
          minMax={minMax}
          prevOdds={prevOdds?.Bookmaker}
          setMinMax={setMinMax}
          ip={ipData?.ip}
          data={data?.Bookmaker}
          showId={2}
          PnlOdds={oddsPnl?.data}
          favData={fav?.data}
          handleFavDel={handleFavDel}
          handleFavSec={handleFavSec}
          matId={id}
          setmatchId={setmatchId}
        />
      )}

      <FancyTabs
        minMax={minMax}
        prevOdds={prevOdds}
        setMinMax={setMinMax}
        data={odds}
        ip={ipData?.ip}
        showId={3}
        fancyPnl={FancyPnl?.data}
        favData={fav?.data}
        handleFavDel={handleFavDel}
        handleFavSec={handleFavSec}
        matId={id}
        setmatchId={setmatchId}
      />
    </>
  );
};
export default MultiMarketDetails;