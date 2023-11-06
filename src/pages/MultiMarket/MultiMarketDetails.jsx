import React, { useState } from 'react';
import MatchedDetailBetComp from '../../component/matchedDetail/MatchedDetailBetComp';
import BookMaker from '../../component/BookMaker/BookMaker';
import Iframes from '../../component/Iframes/Iframes';
import { WebBetPlaceModule } from '../../component/betPlaceModule/BetPlaceModule';
import MyBetsModule from '../../component/myBetsModule/MyBetsModule';
import { useMyIpQuery } from '../../Services/ActiveSportList/ActiveMatch';
import { useCreateFavMutation, useDeleteFavMutation, useUserFavMutation } from '../../Services/Favourite/Favourite';

const MultiMarketDetails = ({ matchName, data }) => {
	const [minMax, setMinMax] = useState({
		minBet: '',
		maxBet: ''
	});
	const { data: ipData } = useMyIpQuery();
	const [userFav, { data: fav }] = useUserFavMutation();

	const [trigger, { data: createFav }] = useCreateFavMutation();
	const [deletedData, { data: deleteFav }] = useDeleteFavMutation();

	const handleFavSec = marketId => {
		trigger({
			marketId: marketId,
			matchId: id
		});
	};
	const handleFavDel = marketId => {
		deletedData({
			marketId: marketId,
			matchId: id
		});
	};

	return (
		<>
			<div className="game_detail-cont">
				<div className="game-detail-left-col">
					<Iframes odds={data} id={1} />
					<MatchedDetailBetComp
						matchName={matchName}
						minMax={minMax}
						setMinMax={setMinMax}
						// prevOdds={prevOdds}
						ip={ipData?.ip}
						data={data}
						showId={1}
						// PnlOdds={oddsPnl?.data}
						handleFavSec={handleFavSec}
						handleFavDel={handleFavDel}
						favData={fav?.data}
          />
          
					<BookMaker
						minMax={minMax}
						//   prevOdds={prevOdds?.Bookmaker}
						setMinMax={setMinMax}
						ip={ipData?.ip}
						data={data?.Bookmaker}
						showId={2}
						//   PnlOdds={oddsPnl?.data}
						favData={fav?.data}
						handleFavDel={handleFavDel}
						handleFavSec={handleFavSec}
					/>
				</div>
				<div className="game-detail-right-col">
					<WebBetPlaceModule minMax={minMax} />
					<MyBetsModule />
				</div>
			</div>
		</>
	);
};

export default MultiMarketDetails;
