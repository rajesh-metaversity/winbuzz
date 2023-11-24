import { useNavigate, useParams } from 'react-router-dom';
import InPlayOddRow from './InPlayOddRow';
import Title from './Title';
import Empty from '../empty/Empty';
const InplayCollapse = ({ data, name, sportid }) => {
	const nav = useNavigate();
	const { id: sportId } = useParams();

	const idSport = sportid || sportId

	const handleGameDetailsPage = (id, sportid) => {
		nav(`/game_detail/${id}/${sportid}`);
	};

	return (
		<>
			<div className="in-play-collapse-container">
				<Title name={name} />
				<div className="odd-container">
					{data?.length ? (
						data?.map((res, index) => {
							console.log(res, 'menn');
							return (
								<div onClick={() => handleGameDetailsPage(res?.matchId, idSport)} key={res?.openDate + res?.matchName + index}>
									<InPlayOddRow live={res} index={index} />
								</div>
							);
						})
					) : (
						<Empty />
					)}
				</div>
			</div>
		</>
	);
};

export default InplayCollapse;
