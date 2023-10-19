import { Link, useNavigate } from "react-router-dom";
import InPlayOddRow from "./InPlayOddRow";
import Title from "./Title";
import { game_detail } from "../../routes/PagesUrl";
const InplayCollapse = ({data, name}) => {

  const nav = useNavigate()

  const handleGameDetailsPage = (id)=>{
    nav(`game_detail/${id}`)
  }

  return (
    <>
      <div className="in-play-collapse-container">
        <Title name={name} />
        <div className="odd-container">
          {data?.map((res) => {
            console.log(res, "sdadsdasd")
            return (
              <div onClick={()=>handleGameDetailsPage(res?.matchId)} key={res}>
                <InPlayOddRow live={res} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InplayCollapse;
