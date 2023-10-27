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
  const { data: betNumberArray } = useStakeQuery();
  const [betData, setBetData] = useState();
  const [betModalsOpen, setBetModalOpen] = useState(true)

  const selector = useSelector(betSlipSelector);

  const [trigger, { data, error, isLoading }] = usePlaceBetsMutation();

  const minMax = ["Min", "Max", "All", "Clear"];
  const buttonColors = ["#ffce00", "#75b7ff", "#a5ff93", "#fffc9f"];
  const [inputValue, setInputValue] = useState("");

  const handleNumberClick = (number) => {
    setInputValue(number.toString());
    const newObj = {
      ...selector.data, stake: number, deviceInfo: {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "browser": "Chrome",
        "device": "Macintosh",
        "deviceType": "desktop",
        "os": "Windows",
        "os_version": "windows-10",
        "browser_version": "108.0.0.0",
        "orientation": "landscape"
      }
    };
    setBetData(newObj)
  };


  const handleButtonClick = (id) => {
    console.log("iddfvfdv", id);
    if (id === "Min") {
      setInputValue(1);
    } else if (id === "Clear") {
      setInputValue("");
    }
  };

  const handlePlaceBet = () => {
    trigger(betData)
  }


  return (
    <>
      {
        (selector?.data != null) && <>
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
                  <input
                    placeholder="Stakes"
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </span>
              </div>
              <span className="numbers">
                {betNumberArray?.data.map((el) => {
                  console.log(el, "fsdfsdfsdfs");
                  return (
                    <p
                      key={el}
                      className="bets"
                      onClick={() => handleNumberClick(el?.value)}>
                      {el?.key}
                    </p>
                  );
                })}
              </span>
              <span className="min_max">
                {minMax.map((items, index) => (
                  <p
                    key={items}
                    style={{ background: buttonColors[index] }}
                    className="inner"
                    onClick={() => handleButtonClick(items)}>
                    {items}
                  </p>
                ))}
              </span>
              <span className="order_buttons">
                <button>Cancel Order</button>
                <button
                  onClick={handlePlaceBet}
                  style={{ background: inputValue.length > 0 ? "#4caf50" : "", color: inputValue.length > 0 ? "#fff" : "" }}
                  className={inputValue.length > 0 ? "place-order_button" : ""}>
                  Place Order
                </button>
              </span>
            </div>
          </div>

        </>
      }

    </>
  );
};

export const MobileBetPlaceModal = () => {
  const selector = useSelector(betSlipSelector);
  const { data: betNumberArray } = useStakeQuery();
  const [inputValue, setInputValue] = useState("");
  const [betData, setBetData] = useState();
  const isBreakPoint = useMediaQuery("(max-width: 780px)");



  // const betNumberArray = [50, 10, 60, 800, 50, 30, 33, 33];
  const minmaxclear = ["min", "max", "clear"];
  const cancelPlaceBet = ["cancel", "placebet"];

  const minMaxClearColor = (btntype) => {
    if (btntype === "min") {
      return "#ffce00";
    } else if (btntype === "max") {
      return "#75b7ff";
    } else if (btntype === "clear") {
      return "#fffc9f";
    } else if (btntype === "cancel") {
      return "#ffffff";
    } else if (btntype === "placebet") {
      return "#229600";
    }
  };

  const handleButtonClick = (id) => {
    setInputValue(id.toString());
    const newObj = {
      ...selector.data, stake: id, deviceInfo: {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "browser": "Chrome",
        "device": "Macintosh",
        "deviceType": "desktop",
        "os": "Windows",
        "os_version": "windows-10",
        "browser_version": "108.0.0.0",
        "orientation": "landscape"
      }
    };
    setBetData(newObj)

  };

  const [trigger, { data, error, isLoading }] = usePlaceBetsMutation();


  // const handleButtonClick = (id) => {
  //   console.log("iddfvfdv", id);
  //   if (id === "Min") {
  //     setInputValue(1);
  //   } else if (id === "Clear") {
  //     setInputValue("");
  //   }
  // };

  const handlePlaceBet = () => {
    trigger(betData)
  }

  return (

      <>
      {
      isBreakPoint && <Box className="mobilemodal">
      <Box className="matchinfo">
        <Box className="teamname">
          {selector?.data?.name}
          <Typography component="strong">{selector?.data?.matchName}</Typography>
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
            autoComplete="off">
            <Box className="incredecre">
              <Typography component="p">odds</Typography>
              <Box sx={{ display: "flex" }}>
                <Button disableRipple className="inc">
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
                <Button disableRipple className="dec" size="small">
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
          <Button disableRipple key={idx} onClick={() => handleButtonClick(val?.value)} className="betStakebutton">
            {val?.key}
          </Button>
        ))}
      </Box>
      <Box className="minmaxclear">
        {minmaxclear.map((val, idx) => (
          <button
            disableRipple
            key={idx}
            size="small"
            style={{
              backgroundColor: `
            ${minMaxClearColor(val)}
          `,
            }}>
            {val}
          </button>
        ))}
      </Box>

      <Box className="calcelplacebet">

        <button
          onClick={handlePlaceBet}

          size="small"
          style={{
            color: "#ffffff",
            backgroundColor: `
            ${minMaxClearColor("placebet")}
          `,
          }}>
          Place Bet
        </button>

      </Box>
    </Box>}
    </>
      
  
    
  );
};