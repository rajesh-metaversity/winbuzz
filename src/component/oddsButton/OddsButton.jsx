///styles
import "./styles.scss";
const OddsButton = ({ bg }) => {
  return (
    <>
      <button className="odds-btn" style={{ background: bg }}>
        <span>54</span>
        <span>5344</span>
      </button>
    </>
  );
};

export default OddsButton;
