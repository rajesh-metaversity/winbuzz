
import InPlayOddRow from "./InPlayOddRow";
import Title from "./Title";
const InplayCollapse = () => {
  return (
    <>
      <div className="in-play-collapse-container">
       <Title name={"Cricket"}/>
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
