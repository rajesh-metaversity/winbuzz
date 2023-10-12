import ball from "../../assets/img/ball.png";
import InPlayOddRow from "./InPlayOddRow";
const InplayCollapse = () => {
  return (
    <>
      <div className="in-play-collapse-container">
        <div className="inplay-titile-box">
          <div className="inplay-title-left-col">
            <img src={ball} alt="" />
            Cricket
          </div>
          <div className="inplay-title-right-col">
            <ul>
              <li>1</li>
              <li>x</li>
              <li>2</li>
            </ul>
          </div>
        </div>
        <div className="odd-container">
          {["liv2", "live","livw"].map((res) => {
            return (
              <>
                <InPlayOddRow live={res}/>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InplayCollapse;
