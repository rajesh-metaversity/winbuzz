import { useNavigate, useParams } from "react-router-dom";
import InPlayOddRow from "./InPlayOddRow";
import Title from "./Title";
import Empty from "../empty/Empty";
import { isLoginSelector } from "../../App/LoginSlice";
import { useSelector } from "react-redux";
import { setLoginFormHandlerRef } from "../../common/MainLayout";
const InplayCollapse = ({ data, name, sportid }) => {
  const nav = useNavigate();
  const { id: sportId } = useParams();

  const idSport = sportid || sportId;

  const handleGameDetailsPage = (id, sportid) => {
    nav(`/game_detail/${id}/${sportid}`);
  };
  const loginCheck = useSelector(isLoginSelector);
  return (
    <>
      <div className="in-play-collapse-container">
        <Title name={name} />
        <div className="odd-container">
          {data?.length ? (
            data?.map((res, index) => {
              return (
                <div
                  onClick={() => {
                    if (!loginCheck) {
                      setLoginFormHandlerRef();
                    } else {
                      handleGameDetailsPage(res?.matchId, idSport);
                    }
                  }}
                  key={res?.openDate + res?.matchName + index}
                >
                  <InPlayOddRow live={res} index={index} sportid={sportid} />
                </div>
              );
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </>
  );
};

export default InplayCollapse;
