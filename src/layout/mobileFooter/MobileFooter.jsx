import React from "react";
import football from "../../assets/img/football.png";
import inPlay from "../../assets/img/in-play.png";
import home from "../../assets/img/home.png";
import casino from "../../assets/img/Casino.png";
import megaphone from "../../assets/img/megaphone.png";

///styles
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { InPlay } from "../../routes/PagesUrl";
import { useSelector } from 'react-redux';
import { isLoginSelector } from '../../App/LoginSlice';
import LoginForm from '../../component/loginForm/LoginForm';
const MobileFooter = ({ setOpen }) => {
	const nav = useNavigate();

	const CricketPage = () => {
		nav('game_list/4');
	};
	const loginCheck = useSelector(isLoginSelector);
	const handleOpen = () => {
		setOpen(true);
	};
	const casinoHandler = () => {
		if (loginCheck) {
			nav('/casino');
		} else {
			handleOpen();
		}
	};
	return (
		<div className="mobile-footer-container">
			<div className="mobile-footer-left-col">
				<ul>
						<Link className="link" to="game_list/4">
					<li onClick={() => CricketPage()} className="link">
						<img src={football} alt="" />
							<span>Sports</span>
					</li>
						</Link>
						<Link to={InPlay} className="link">
					<li>
						<img src={inPlay} alt="" />
							<span>In Play</span>
					</li>
						</Link>
				</ul>
			</div>
			<div className="mobile-footer-right-col">
				<ul>
					<Link to="/casino">
					<li>
						<img src={casino} alt="" />
						<span onClick={() => casinoHandler()}>Casino</span>
					</li>
					</Link>

					<li>
						<img src={megaphone} alt="" />
						<span>Promotion</span>
					</li>
				</ul>
			</div>
			<div className="mobile-footer-home">
				<Link to="/">
					<img src={home} alt="" />
				</Link>
			</div>
		</div>
	);
};

export default MobileFooter;
