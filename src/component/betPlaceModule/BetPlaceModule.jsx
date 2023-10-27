import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { useEffect, useState } from "react";
import Heading from "./Heading";
import "./styles.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { betSlipSelector } from "../../App/LoginSlice";
import { useStakeQuery } from "../../Services/stake/Deposit";
import { usePlaceBetsMutation } from "../../Services/MyBets/MyBets";

export const WebBetPlaceModule = () => {
	const betNumberArray = [50, 10, 60, 800, 50, 30, 33, 33];

	const minMax = ['Min', 'Max', 'All', 'Clear'];
	const buttonColors = ['#ffce00', '#75b7ff', '#a5ff93', '#fffc9f'];
	const [inputValue, setInputValue] = useState('');

	const handleNumberClick = number => {
		setInputValue(number.toString());
	};

	const handleButtonClick = id => {
		if (id === 'Min') {
			setInputValue(1);
		} else if (id === 'Clear') {
			setInputValue('');
		}
	};

	return (
		<>
			<div className="right_cont">
				<Heading />

				<div className="bet_details">
					<span className="team_name">
						<p>New Zealand vs Bangladesh</p>
						<p>New Zealand</p>
					</span>
					<div className="bet_number">
						<span className="odds">
							<label>Odds</label>
						</span>
						<span className="bet_inputs">
							<input type="number" />
							<input placeholder="Stakes" type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />
						</span>
					</div>
					<span className="numbers">
						{betNumberArray.map((el, index) => (
							<p key={el + index} className="bets" onClick={() => handleNumberClick(el)}>
								{el}
							</p>
						))}
					</span>
					<span className="min_max">
						{minMax.map((items, index) => (
							<p key={items + index} style={{ background: buttonColors[index] }} className="inner" onClick={() => handleButtonClick(items)}>
								{items}
							</p>
						))}
					</span>
					<span className="order_buttons">
						<button>Cancel Order</button>
						<button style={{ background: inputValue.length > 0 ? '#4caf50' : '' }} className={inputValue.length > 0 ? 'place-order_button' : ''}>
							Place Order
						</button>
					</span>
				</div>
			</div>
			<div className="my_bets-cont">
				<div className="heading">
					<span className="my_bets">My bets</span>
					<span className="close">
						<CloseIcon />
					</span>
				</div>
			</div>
		</>
	);
};

export const MobileBetPlaceModal = () => {
	const betNumberArray = [50, 10, 60, 800, 50, 30, 33, 33];
	const minmaxclear = ['min', 'max', 'clear'];
	const cancelPlaceBet = ['cancel', 'placebet'];

	const minMaxClearColor = btntype => {
		if (btntype === 'min') {
			return '#ffce00';
		} else if (btntype === 'max') {
			return '#75b7ff';
		} else if (btntype === 'clear') {
			return '#fffc9f';
		} else if (btntype === 'cancel') {
			return '#ffffff';
		} else if (btntype === 'placebet') {
			return '#229600';
		}
	};

	return (
		<Box className="mobilemodal">
			<Box className="matchinfo">
				<Box className="teamname">
					south africa
					<Typography component="strong">south africa v Bangladesh</Typography>
				</Box>
				<Box className="minmax">
					<Typography component="small">Min Bet:</Typography>
					<Typography component="small">max bet:</Typography>
				</Box>
			</Box>
			<Box className="oddsstake">
				<Box className="inputparent">
					<Stack className="form" component="form" noValidate autoComplete="off">
						<Box className="incredecre">
							<Typography component="p">odds</Typography>
							<Box sx={{ display: 'flex' }}>
								<Button disableRipple className="inc">
									-
								</Button>
								<TextField
									// InputProps={{ disableUnderline: true }}
									className="betinput"
									hiddenLabel
									id="filled-hidden-label-small"
									defaultValue="2.02"
									variant="filled"
									size="small"
								/>
								<Button disableRipple className="dec" size="small">
									+
								</Button>
							</Box>
						</Box>

						<Box sx={{ width: '50%' }} className="stakeee">
							<Typography component="p">stake</Typography>
							<TextField
								// InputProps={{ disableUnderline: true }}
								className="stakeinput"
								hiddenLabel
								id="filled-hidden-label-small"
								defaultValue="0"
								variant="filled"
								size="small"
							/>
						</Box>
					</Stack>
				</Box>
			</Box>
			<Box className="stakeButton">
				{betNumberArray.map((val, idx) => (
					<Button disableRipple key={idx + val} className="betStakebutton">
						{val}
					</Button>
				))}
			</Box>
			<Box className="minmaxclear">
				{minmaxclear.map((val, idx) => (
					<button
						key={idx + val}
						size="small"
						style={{
							backgroundColor: `
            ${minMaxClearColor(val)}
          `
						}}>
						{val}
					</button>
				))}
			</Box>

			<Box className="calcelplacebet">
				{cancelPlaceBet.map((val, idx) => (
					<button
						key={val + idx}
						size="small"
						style={{
							color: `${val === 'cancel' ? '#000' : '#ffffff'}`,
							backgroundColor: `
            ${minMaxClearColor(val)}
          `
						}}>
						{val}
					</button>
				))}
			</Box>
		</Box>
	);
};