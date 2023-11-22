import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import leaf from "../../assets/img/leaf.png";
import { useBannerListDataMutation } from "../../Services/BannerList/BannerList";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
import ModalComponent from "../modal/Modal";
import CasinoRuleModalContent from "../../component/casinoRuleModalContent/CasinoRuleModalContent";
import { useSelector } from "react-redux";
import { isLoginSelector } from "../../App/LoginSlice";
import CasinoCard from '../casinoCard/CasinoCard';
import { useQtechMutation } from '../../Services/Qtech/Qtech';

var settings = {
	dots: false,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	speed: 500,
	cssEase: 'linear',
	arrows: false,
	pauseOnHover: true,
	vertical: true,
	verticalSwiping: true
};

export const SiderBanner = ({ setOpen, open, setModalValue }) => {
	const [casinoRuleModal, setCasinoRuleModal] = useState(false);

	const isBreakPoint = useMediaQuery('(max-width: 780px)');
	const [trigger, { data, isLoading, isError }] = useBannerListDataMutation();
	const [casinoData, setCasinoData] = useState([]);
	useEffect(() => {
		trigger({
			type: 2
		});
		fetch('https://admin-api-banners-new.s3.ap-south-1.amazonaws.com/wolf.json')
			.then(res => res.json())
			.then(res => {
				setCasinoData(res?.data);
			});
	}, []);
	const [gameId, setGameId] = useState();
	const [gameName, setGameName] = useState();
	const loginCheck = useSelector(isLoginSelector);
	const handelAuraCasino = (gameId, gameName) => {
		setGameId(gameId);
		setGameName(gameName);
	};

	const [gameCode, setGameCode] = useState('');
	const [category, setCategory] = useState([]);
	const [gameLists, setGameLists] = useState([]);
	const [providerFilter, setProviderFilter] = useState('ALL');

	const casinoToken = localStorage.getItem('casino-token');
	const [trigge, { data: gamelist }] = useQtechMutation();
	useEffect(() => {
		// if (casinoToken != undefined || gameCode) {
		trigge({
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

	if (!isBreakPoint) {
		return (
			<>
				<ModalComponent
					Elememt={<CasinoRuleModalContent gameId={gameId} gameName={gameName} handleClose={() => setCasinoRuleModal(false)} />}
					open={casinoRuleModal}
					setOpen={setCasinoRuleModal}
				/>
				<div className="side_banner_cont">
					<div className="play_games">Play Games</div>
					<Slider className="right_banner" {...settings}>
						{data?.data?.map((sliderdata, index) => (
							<div key={index + sliderdata?.path}>
								<Grid container>
									<Grid
										item
										// xs={12}
										sx={{
											backgroundColor: '#fff',
											borderRadius: '0.375rem',
											overflowX: 'hidden',
											maxHeight: 'auto',
											cursor: 'pointer',
											width: '100%'
										}}>
										<img src={sliderdata?.path} alt="" width="100%" height="160px" style={{ objectFit: '' }} />
									</Grid>
								</Grid>
							</div>
						))}
					</Slider>
				</div>
				{loginCheck && (
					<div className="side_banner-sub_cont">
						<div className="play_games">Play Games</div>
						<div className="bottom_images">
							{/* <Casino /> */}
							<CasinoCard list={category} gameLists={gameLists} providerFilter={providerFilter} />
							{/* {casinoData?.map((data, index) => (
						<span key={index + data?.imageUrl} className="image_cont">
							<img src={data?.imageUrl} alt="" className="image" />
							<div className="over-lay">
								<button
									className="play-button"
									onClick={() => {
										if (loginCheck) {
											setCasinoRuleModal(true);
											handelAuraCasino(data?.gameId, data.gameName);
										} else {
											setModalValue(0);
											setOpen(true);
										}
									}}>
									Play Now
								</button>
							</div>
						</span>
					))} */}
						</div>
					</div>
				)}
			</>
		);
	} else {
		return (
			<>
				<div className="mobile-casion-banner-heading">
					<img src={leaf} alt="" />
					casino
				</div>
				<div className="mobile-casino-banner-conatainer">
					{data?.data?.map((sliderdata, index) => {
						return <img src={sliderdata.path} alt="" key={index + sliderdata.path} />;
					})}
				</div>
			</>
		);
	}
};