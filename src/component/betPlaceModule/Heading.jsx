import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { setBetSlipData } from "../../App/LoginSlice";
const Heading = ({isBack, setBetModalOpen}) => {

  const dispatch = useDispatch();


  const handleBetModalOpen = ()=>{
    dispatch(setBetSlipData())
  }

  return (
    <div className="heading">
      <span className={`${isBack?"back":"lay"} bet_slip`}>Bet Slip</span>
      <span className="close" onClick={()=>handleBetModalOpen()}>
        <CloseIcon />
      </span>
    </div>
  );
};

export default Heading;
