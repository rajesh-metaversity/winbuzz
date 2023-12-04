
import "./style.scss";

const FantasyGameCard = ({ gameLists, setCasinoRuleModal, setCasinoName }) => {
  return (
    <>
      {gameLists?.map((res) => {
        return (
          <div className="casino-card-t" key={res.image}>
            <div
              className="casino_card"
              style={{ backgroundImage: `url(${res?.image})` }}
            ></div>
            <div
              className="casion-card-footer"
              onClick={() => {
                setCasinoRuleModal(true);
                setCasinoName(res?.id);
              }}
            >
              Play Now
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FantasyGameCard;
