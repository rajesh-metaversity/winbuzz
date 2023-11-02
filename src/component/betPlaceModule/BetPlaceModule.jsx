import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { useEffect, useState } from "react";
import Heading from "./Heading";
import "./styles.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { betSlipSelector, setBetSlipData } from "../../App/LoginSlice";
import { useStakeQuery } from "../../Services/stake/Deposit";
import { usePlaceBetsMutation } from "../../Services/MyBets/MyBets";
import { toast } from 'react-toastify';

export const WebBetPlaceModule = ({ minMax }) => {
	const { data: betNumberArray } = useStakeQuery();
	const [betData, setBetData] = useState();

	const selector = useSelector(betSlipSelector);

	const [trigger, { data, error, isLoading }] = usePlaceBetsMutation();

	const buttonColors = ['#ffce00', '#75b7ff', '#a5ff93', '#fffc9f'];
	const [inputValue, setInputValue] = useState('');

	const handleNumberClick = number => {
		setInputValue(number.toString());
		const newObj = {
			...selector.data,
			stake: number,
			deviceInfo: {
				userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
				browser: 'Chrome',
				device: 'Macintosh',
				deviceType: 'desktop',
				os: 'Windows',
				os_version: 'windows-10',
				browser_version: '108.0.0.0',
				orientation: 'landscape'
			}
		};
		setBetData(newObj);
	};

	const handleButtonClick = id => {
		setInputValue(id);
	};

	const handlePlaceBet = () => {
		trigger(betData);
	};

	useEffect(() => {
		if (data?.status) {
			toast.success(data?.message);
		} else {
			toast.error(data?.message);
		}
	}, [data]);

	return (
		<>
			{selector?.data != null && (
				<>
					<div className="right_cont">
						<Heading isBack={selector?.data?.isBack} />

						<div className="bet_details">
							<span className="team_name">
								<p>{selector?.data?.matchName}</p>
								<p>{selector?.data?.name}</p>
							</span>
							<div className="bet_number">
								<span className="odds">
									<label>Odds</label>
								</span>
								<span className="bet_inputs">
									<input type="number" value={selector?.data?.odds} />
									<input placeholder="Stakes" type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />
								</span>
							</div>
							<span className="numbers">
								{betNumberArray?.data.map((el, id) => {
									return (
										<p key={id} className="bets" onClick={() => handleNumberClick(el?.value)}>
											{el?.key}
										</p>
									);
								})}
							</span>
							<span className="min_max">
								<p style={{ background: '#ffce00' }} className="inner" onClick={() => handleButtonClick(minMax?.minBet)}>
									Min
								</p>
								<p style={{ background: '#75b7ff' }} className="inner" onClick={() => handleButtonClick(minMax?.maxBet)}>
									Max
								</p>
								<p style={{ background: '#a5ff93' }} className="inner">
									All
								</p>
								<p style={{ background: '#fffc9f' }} className="inner" onClick={() => setInputValue('')}>
									Clear
								</p>
							</span>
							<span className="order_buttons">
								<button>Cancel Order</button>
								<button
									onClick={handlePlaceBet}
									style={{
										background: inputValue.length > 0 ? '#4caf50' : '',
										color: inputValue.length > 0 ? '#fff' : ''
									}}
									className={inputValue.length > 0 ? 'place-order_button' : ''}>
									Place Order
								</button>
							</span>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export const MobileBetPlaceModal = ({ minMax }) => {
  let selector = useSelector(betSlipSelector);
  const { data: betNumberArray } = useStakeQuery();
  const [inputValue, setInputValue] = useState("");
  const [betData, setBetData] = useState();
  const minmaxclear = ["min", "max", "All in", "clear"];

  const minMaxClearColor = (btntype) => {
    if (btntype === "min") {
      return "#ffce00";
    } else if (btntype === "max") {
      return "#75b7ff";
    } else if (btntype === "clear") {
      return "#fffc9f";
    } else if (btntype === "cancel") {
      return "#ffffff";
    } else if (btntype === "All in") {
      return "#a5ff93";
    } else if (btntype === "placebet") {
      return "#229600";
    }
  };

  const handleButtonClick = (id) => {
    setInputValue(id.toString());
    const newObj = {
      ...selector.data,
      stake: id,
      deviceInfo: {
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        browser: "Chrome",
        device: "Macintosh",
        deviceType: "desktop",
        os: "Windows",
        os_version: "windows-10",
        browser_version: "108.0.0.0",
        orientation: "landscape",
      },
    };
    setBetData(newObj);
  };

  const [trigger, { data, error, isLoading }] = usePlaceBetsMutation();

  const handlePlaceBet = () => {
    trigger(betData);
  };

  const isBreakPoint = useMediaQuery("(max-width: 780px)");

  const handleMinMax = (id) => {
    if (id === 0) {
      setInputValue(minMax?.minBet);
    } else if (id === 1) {
      setInputValue(minMax?.maxBet);
    } else {
      setInputValue("");
    }
  };
  let dispatch = useDispatch();
  return (
    <>
      {isBreakPoint && selector?.data?.name && (
        <Box
          className={`mobilemodal ${selector?.data?.isBack ? "back" : "lay"}`}
        >
          <Box className="matchinfo">
            <Box className="teamname">
              {selector?.data?.name}
              <Typography component="strong">
                {selector?.data?.matchName}
              </Typography>
            </Box>
            <Box className="minmax">
              <Typography component="small">Min Bet:</Typography>
              <Typography component="small">max bet:</Typography>
            </Box>
          </Box>
          <Box className="oddsstake">
            <Box className="inputparent">
              <Stack
                className="form"
                component="form"
                noValidate
                autoComplete="off"
              >
                <Box className="incredecre">
                  <Typography component="p">odds</Typography>
                  <Box sx={{ display: "flex" }}>
                    <Button
                      disableRipple
                      className="inc"
                      onClick={() =>
                        dispatch(
                          setBetSlipData({
                            ...selector.data,
                            odds: selector?.data?.odds - 1.0,
                          })
                        )
                      }
                    >
                      -
                    </Button>
                    <TextField
                      InputProps={{ disableUnderline: true }}
                      className="betinput"
                      hiddenLabel
                      id="filled-hidden-label-small"
                      defaultValue="2.02"
                      variant="filled"
                      size="small"
                      value={selector?.data?.odds}
                    />
                    <Button
                      disableRipple
                      className="dec"
                      size="small"
                      onClick={() =>
                        dispatch(
                          setBetSlipData({
                            ...selector.data,
                            odds: selector?.data?.odds + 1.0,
                          })
                        )
                      }
                    >
                      +
                    </Button>
                  </Box>
                </Box>

                <Box sx={{ width: "50%" }} className="stakeee">
                  <Typography component="p">stake</Typography>
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    className="stakeinput"
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="0"
                    variant="filled"
                    size="small"
                    value={inputValue}
                  />
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box className="stakeButton">
            {betNumberArray?.data?.map((val, idx) => (
              <Button
                disableRipple
                key={idx}
                onClick={() => handleButtonClick(val?.value)}
                className="betStakebutton"
              >
                {val?.key}
              </Button>
            ))}
          </Box>
          <Box className="minmaxclear">
            {minmaxclear.map((val, idx) => (
              <button
                onClick={() => handleMinMax(idx)}
                key={idx}
                size="small"
                style={{
                  backgroundColor: `
				  ${minMaxClearColor(val)}
				`,
                }}
              >
                {val}
              </button>
            ))}
          </Box>

          <Box className="calcelplacebet">
            <button
              onClick={() => dispatch(setBetSlipData({}))}
              size="small"
              style={{
                color: "black",
                backgroundColor: "white",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handlePlaceBet}
              size="small"
              style={{
                color: "#ffffff",
                backgroundColor: `
				  ${minMaxClearColor("placebet")}
				`,
              }}
            >
              Place Bet
            </button>
          </Box>
        </Box>
      )}
    </>
  );
};
