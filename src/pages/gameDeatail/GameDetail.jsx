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
import {
  useCreateFavMutation,
  useDeleteFavMutation,
  useUserFavMutation,
} from "../../Services/Favourite/Favourite";
import { setBetSlipData } from '../../App/LoginSlice';
import { useDispatch } from 'react-redux';

const GameDetail = () => {
	const { id } = useParams();
	const [odds, setOdds] = useState({});
	const [prevOdds, setPrevOdds] = useState({});
	const [minMax, setMinMax] = useState({
		minBet: '',
		maxBet: ''
	});

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

	useEffect(() => {
		userFav({
			matchId: id
		});
	}, [createFav?.data, deleteFav?.data, id]);

	useEffect(() => {
		socket.on('OddsUpdated', e =>
			setOdds(odds => {
				e['All'] = e ? Object.keys(e).reduce((ac, key) => (['Odds', 'All', 'Bookmaker'].includes(key) ? ac : [...ac, ...e[key]]), []) : [];

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
		socket.emit('JoinRoom', {
			eventId: id
		});
	}, [id]);

	const { data } = useMyIpQuery();
	const { data: oddsPnl } = useOddsPnlQuery({ matchId: id });
	const { data: FancyPnl } = useFancyPnlQuery({ matchId: id });
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(setBetSlipData({}));
	// }, []);

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
					favData={fav?.data}
					handleFavDel={handleFavDel}
					handleFavSec={handleFavSec}
				/>
				<BookMaker
					minMax={minMax}
					prevOdds={prevOdds?.Bookmaker}
					setMinMax={setMinMax}
					ip={data?.ip}
					data={odds?.Bookmaker}
					showId={2}
					PnlOdds={oddsPnl?.data}
					favData={fav?.data}
					handleFavDel={handleFavDel}
					handleFavSec={handleFavSec}
				/>
				<FancyTabs
					minMax={minMax}
					prevOdds={prevOdds}
					setMinMax={setMinMax}
					data={odds}
					ip={data?.ip}
					showId={3}
					fancyPnl={FancyPnl?.data}
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
	);
};
export default GameDetail;
