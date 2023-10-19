import { Link } from "react-router-dom";
import InPlayOddRow from "./InPlayOddRow";
import Title from "./Title";
import { game_detail } from "../../routes/PagesUrl";
const InplayCollapse = ({data, name}) => {
  return (
    <>
      <div className="in-play-collapse-container">
        <Title name={name} />
        <div className="odd-container">
          {data?.map((res) => {
            return (
              <Link to={game_detail} key={res}>
                <InPlayOddRow live={res} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InplayCollapse;
