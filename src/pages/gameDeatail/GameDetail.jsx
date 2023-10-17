import { useEffect } from 'react';
import { dynamicBaseQuery } from '../../Services/BadRequestHandler/BadRequestHandler';
import Iframes from '../../component/Iframes/Iframes';
import RightTable from './RightTable';
// import RightTableBottom from './RightTableBottom'
import './styles.scss';

const GameDetail = () => {
	useEffect(() => {
		dynamicBaseQuery();
	}, []);
	return (
		<div className="game_detail-cont">
			<div className="game-detail-left-col">
				<Iframes />
			</div>
			<div className="game-detail-right-col">
				<RightTable />
				{/* <RightTableBottom /> */}
			</div>
		</div>
	);
};
export default GameDetail;
