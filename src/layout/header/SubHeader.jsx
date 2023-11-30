import { Link, useNavigate, useParams, useOutletContext } from 'react-router-dom';
import './SubHeader.scss';
import { useActiveSportQuery } from '../../Services/ActiveSportList/ActiveSportList';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '../../useMediaQuery/UseMediaQuery';
import play from '../../assets/img/in-play.png';
import { InPlay, casino, deposit, home, withdraw } from '../../routes/PagesUrl';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';

import { sportImages } from '../sider/Sider';
import { useSelector } from 'react-redux';
import { isLoginSelector } from '../../App/LoginSlice';

const SubHeader = () => {
	const { data } = useActiveSportQuery();
	const nav = useNavigate();

	const handleSportDetailsPage = (val, name) => {
		nav(`/game_list/${val}`, { state: name });
	};
	const { id } = useParams();
	const pathName = window.location.pathname;
	const isLogin = useSelector(isLoginSelector);
	const isBreakPoint = useMediaQuery('(max-width: 780px)');

	const userType = localStorage.getItem('userTypeInfo');

	console.log(isLogin, "dfvefrv")
	if (!isBreakPoint) {
		return (
			<div className="sub_header_cont">
				<ul className="sub_header_ul">
					{data?.data.map((items, index) => {
						return (
							<React.Fragment key={items?.sportId + items.sportName + index}>
								<li>
									<div onClick={() => handleSportDetailsPage(items?.sportId, items.sportName)}>{items.sportName}</div>
								</li>
							</React.Fragment>
						);
					})}
					{isLogin && (
						<li>
							<Link to={casino}>Int Casino</Link>
						</li>
					)}
				</ul>
			</div>
		);
	} else {
		return (
			<>
				<div className="mobile-sub-header-container">
					<ul>
						<li
							onClick={() => {
								nav(InPlay);
							}}
							className={pathName == '/in-play' ? 'active-tabs' : ''}>
							<img src={play} alt="" />

							<span>
								<Link to={home}>In play</Link>
							</span>
						</li>

						{data?.data?.map((items, index) => {
							return (
								<React.Fragment key={items.sportId + items.sportName + index}>
									<li
										onClick={() => {
											nav(`/game_list/${items.sportId}`);
											handleSportDetailsPage(items?.sportId, items.sportName);
										}}
										className={id == items.sportId ? 'active-tabs' : ''}>
										{/* <img src={play} alt="" /> */}
										<img src={sportImages[items.sportName]} />
										<span>{items.sportName}</span>
									</li>
								</React.Fragment>
							);
						})}
						{isLogin && (
							<li onClick={() => nav('/casino')} className={pathName == '/casino' ? 'active-tabs' : ''}>
								<img src={play} alt="" />
								<span>
									<Link to={casino}>Int Casino</Link>
								</span>
							</li>
						)}
					</ul>
				</div>
				{isLogin || userType == 2 && (
					<div className="mobile-subheader-deposit">
						<Link to={deposit}>
							<div className="mobile-subheader-deposit-left-col">
								<AccountBalanceIcon />
								Deposit
							</div>
						</Link>
						<Link to={withdraw}>
							<div className="mobile-subheader-deposit-right-col">
								<AddCardIcon />
								Withdraw
							</div>
						</Link>
					</div>
				)}
			</>
		);
	}
};

export default SubHeader;
