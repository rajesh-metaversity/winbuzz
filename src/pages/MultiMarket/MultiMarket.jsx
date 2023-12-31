import { useEffect, useState } from "react";
import { WebBetPlaceModule } from "../../component/betPlaceModule/BetPlaceModule";
import { useUserFavMutation } from "../../Services/Favourite/Favourite";
import { useFavListMutation } from "../../Services/FavList/FavList";
import MultiMarketDetails from "./MultiMarketDetails";


const MultiMarket = () => {
	const [trigger, { data }] = useFavListMutation();
	const [userFav, { data: fav }] = useUserFavMutation();
	const [minMax, setMinMax] = useState({
		minBet: '',
		maxBet: ''
	});

	const [urlString, setUrlString] = useState('');
	const [matchId, setMatchId] = useState();

	console.log(fav?.data, 'fav');

	useEffect(() => {
		userFav({});
	}, []);

	useEffect(() => {
		if (fav?.data?.length) {
			let str = '';
			for (const x of fav.data) {
				str += `${x.matchId}::${x.marketId},`;
			}
			console.log('strr', str);
			setUrlString(str);
		}
	}, [fav?.data]);

	useEffect(() => {
		if (urlString) trigger(urlString);
	}, [urlString]);

	let newArray = [];
	let uniqueObject = {};

	for (let i in fav?.data) {
		const objTitle = fav?.data[i]['matchId'];
		uniqueObject[objTitle] = fav?.data[i];
	}
	for (let i in uniqueObject) {
		newArray.push(uniqueObject[i]);
	}

	const [matchid, setmatchId] = useState(0);
	return (
		<>
			<div className="game_detail-cont">
				<div className="game-detail-left-col">
					{newArray?.map((res, id) => {
						if (data && Object.keys(data[res?.matchId])?.length == 0) return <></>;
						return (
							<>
								<MultiMarketDetails
									id={res?.matchId}
									setmatchId={setmatchId}
									data={data && data[res?.matchId]}
									matchName={res?.matchName}
									setMinMax={setMinMax}
									minMax={minMax}
								/>
							</>
						);
					})}
				</div>
				<div className="game-detail-right-col">
					<WebBetPlaceModule minMax={minMax} matchid={matchid} />
					{/* <MyBetsModule /> */}
				</div>
			</div>
		</>
	);
};
export default MultiMarket;