import "./style.scss";
import { useNavigate } from "react-router-dom";
const CasinoCard = ({ gameLists, providerFilter }) => {
  const nav = useNavigate();

  const handleNav = (id, name) => {
    nav(`/game/${id}/${name}`);
  };

  return (
    <div className="casino_card_container">
      {gameLists?.map((res) => {
       
        if (res.category.includes(providerFilter) || providerFilter === "ALL")
          return (
            <>
              <div className="casino-card-t">
                <div
                  className="casino_card"
                  style={{ backgroundImage: `url(${res?.images[1].url})` }}
                ></div>
                <div
                  className="casion-card-footer"
                  onClick={() => {
                    handleNav(res?.id, res?.name);
                  }}
                >
                  Play Now
                </div>
              </div>
            </>
          );
      })}
      {/* {gameLists?.map((item) => {
       
      })} */}
    </div>
  );
};

export default CasinoCard;
