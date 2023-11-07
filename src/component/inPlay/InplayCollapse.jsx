import { useNavigate } from "react-router-dom";
import InPlayOddRow from "./InPlayOddRow";
import Title from "./Title";
import Empty from '../empty/Empty';
const InplayCollapse = ({ data, name }) => {
	const nav = useNavigate();

	const handleGameDetailsPage = id => {
		nav(`/game_detail/${id}`);
	};

	return (
		<>
			<div className="in-play-collapse-container">
				<Title name={name} />
				<div className="odd-container">
					{data?.length ? (
						data?.map((res, index) => {
							return (
								<div onClick={() => handleGameDetailsPage(res?.matchId)} key={res?.openDate + res?.matchName + index}>
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
