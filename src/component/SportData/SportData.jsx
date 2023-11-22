import { useEffect } from "react";
import InplayCollapse from "../inPlay/InplayCollapse";
import { useActiveMatchMutation } from "../../Services/ActiveSportList/ActiveMatch";
import { useLocation, useOutletContext, useParams } from 'react-router-dom';
import InPlayHeading from '../inPlay/InPlay';
import Loader from '../Loader/Loader';

const SportData = () => {
	// const [gameName] = useOutletContext();
	const { id } = useParams();

	const { state } = useLocation();

	const [trigger, { data, isLoading, isError }] = useActiveMatchMutation();

	useEffect(() => {
		trigger(id || 4);
	}, [id]);

	if (isLoading) {
		return <Loader />;
	} else {
		return (
			<>
				<InPlayHeading headName={state || 'EXCHANGE GAMES'} />
				<InplayCollapse data={data?.data} name={state} />
			</>
		);
	}
};

export default SportData;
