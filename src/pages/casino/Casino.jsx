import Title from "../../component/inPlay/Title";
import CasinoList from "./CasinoList";
import CasinoCard from "../../component/casinoCard/CasinoCard";
////styles
import "./style.scss";
import { QtechProvider } from "./QtechProvider";
import { useEffect, useState } from "react";
import { useQtechMutation } from "../../Services/Qtech/Qtech";


const Casino = () => {
	const [gameCode, setGameCode] = useState('');
	const [category, setCategory] = useState([]);
	const [gameLists, setGameLists] = useState([]);
	const [providerFilter, setProviderFilter] = useState('ALL');

	const casinoToken = localStorage.getItem('casino-token');
	const [trigger, { data: gamelist }] = useQtechMutation();
	useEffect(() => {
		// if (casinoToken != undefined || gameCode) {
		trigger({
			gameCategory: 'LIVECASINO',
			provider: gameCode,
			token: casinoToken
		});
		// }
	}, [gameCode, casinoToken]);

	useEffect(() => {
		if (gamelist?.data?.items) {
			const { items } = gamelist.data;
			let categories = items.map(el => {
				const itemAr = el?.category.split('/');
				const lastelm = itemAr[itemAr.length - 1];
				return lastelm;
			});
			const uniqueArrayValues = Array.from(new Set(categories));
			// if (uniqueArrayValues.length) {
			uniqueArrayValues.unshift('ALL');
			const newAr = uniqueArrayValues.filter(el => el !== 'OTHER');
			// newAr.push("OTHER");
			setCategory(newAr);
			setGameLists(items);
		}
	}, [gamelist?.data]);

	return (
		<div>
			<div className="casino-page-container">
				<Title name={'INT CASINO'} />
				<div className="casino-center-col">
					<p className="int_casino">Int Casino</p>
					<CasinoList list={QtechProvider} setGameCode={setGameCode} type={1} />
					<CasinoList list={category} type={2} setProviderFilter={setProviderFilter} />
					<div className="casino_card_container">
						<CasinoCard list={category} gameLists={gameLists} providerFilter={providerFilter} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Casino;
