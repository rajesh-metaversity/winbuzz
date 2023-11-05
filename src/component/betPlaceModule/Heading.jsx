import CloseIcon from "@mui/icons-material/Close";

const Heading = ({ isBack, handleBetModalOpen }) => {
  return (
    <div className="heading">
      <span className={`${isBack ? "back" : "lay"} bet_slip`}>Bet Slip</span>
      <span className="close" onClick={() => handleBetModalOpen()}>
        <CloseIcon />
      </span>
    </div>
  );
};

export default Heading;
