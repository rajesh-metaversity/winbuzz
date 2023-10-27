
import { Box, Button, Grid, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { useState } from "react";
import Heading from "./Heading";
import "./styles.scss";
import CloseIcon from "@mui/icons-material/Close";

export const WebBetPlaceModule = () => {

  const betNumberArray = [50, 10, 60, 800, 50, 30, 33, 33];

  const minMax = ["Min", "Max", "All", "Clear"];
  const buttonColors = ["#ffce00", "#75b7ff", "#a5ff93", "#fffc9f"];
  const [inputValue, setInputValue] = useState('');

  const handleNumberClick = (number) => {
    setInputValue(number.toString());
  };

  const handleButtonClick = (id) => {
    console.log("iddfvfdv", id)
    if (id === "Min") {
      setInputValue(1)
    }

    else if (id === "Clear") {
      setInputValue("")

    }

  }

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
              <input placeholder="Stakes" type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </span>
          </div>
          <span className="numbers">
            {betNumberArray.map((el) => (
              <p key={el} className="bets" onClick={() => handleNumberClick(el)}>
                {el}
              </p>
            ))}
          </span>
          <span className="min_max">
            {minMax.map((items, index) => (
              <p
                key={items}
                style={{ background: buttonColors[index] }}
                className="inner"
                onClick={() => handleButtonClick(items)}

              >
                {items}
              </p>
            ))}
          </span>
          <span className="order_buttons">
            <button>Cancel Order</button>
            <button style={{ background: inputValue.length > 0 ? "#4caf50" : "" }} className={inputValue.length > 0 ? "place-order_button" : ""}>Place Order</button>
          </span>
        </div>
      </div>

    </>
  );
};

