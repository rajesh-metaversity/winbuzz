import "./styles.scss";
import BetsTabs from "./ExposureTabs";
const ExposureIndex = () => {
  return (
    <div className="exposure-container">
      <div className="exposure-heading">Exposure</div>
      <div className="tabs-content">
        <BetsTabs />
      </div>
    </div>
  );
};

export default ExposureIndex;
