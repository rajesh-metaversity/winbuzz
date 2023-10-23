import { useEffect, useState } from "react";
import cricket from "../../assets/img/cricket.svg";
import football from "../../assets/img/football.svg";
import arrow from "../../assets/img/rightArrow.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Link, useNavigate} from 'react-router-dom'
///styles
import "./styles.scss";
import { useActiveSportQuery } from '../../Services/ActiveSportList/ActiveSportList';
import { useActiveMatchMutation, useInPlayQuery } from "../../Services/ActiveSportList/ActiveMatch";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";

const SiderBar = () => {
	// const useJJJJJJJ = useInPlayQuery();
  
	// console.log("dataID", useJJJJJJJ?.data?.data)
	const  { data, isLoading, isError } = useActiveSportQuery();
	const [trigge, { data: activeMatch, isLoading: jkm, isError: bhjn }] = useActiveMatchMutation();

	const [matchName, setMatchName] = useState('second');
	const [activeSlide, setActiveSlide] = useState(false);
	const isBreakPoint = useMediaQuery('(max-width: 780px)');

	const nav = useNavigate();

	const handleGameDetailsPage = (id) => {
		nav(`/game_detail/${id}`);
	};
	
	return (
		<div className={isBreakPoint ? 'sider-active' : 'sider-container'} onClick={e => e.stopPropagation()}>
			<ul className="sider-container-ul">
				{data?.data.map(item => {
					console.log(item, "item")
					return (
						<>
							<li
								onClick={() => {
									setMatchName(item?.sportName);
									setActiveSlide(true);
									trigge(item.sportId);
								}}>
								<p>
									<img src={item?.sportImage} alt="cricket" />
									{item.sportName}
								</p>
								<span>
									<img src={arrow} alt="" />
								</span>
							</li>
						</>
					);
				})}
			</ul>
			<div className={activeSlide ? 'slide-sider-disable' : 'slide-sider-active'}>
				<ul className="sider-container-ul">
					<p onClick={() => setActiveSlide(false)} className="previous">
						<ArrowBackIosNewIcon /> Previuos
					</p>
					<p className="matchName">{matchName}</p>
					{activeMatch?.data.map(item => {
						// console.log("item", item?.matchId)
						if (item.matchName) {
							return (
								<>
									<li onClick={() => setActiveSlide(true)}>

											<p onClick={() => handleGameDetailsPage(item?.matchId)}>{item.matchName}</p>
										<span>
											<img src={arrow} alt="" />
										</span>
									</li>
								</>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
};

export default SiderBar;
