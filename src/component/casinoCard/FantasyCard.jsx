import "./style.scss";

const FantasyGameCard = ({ gameLists, setCasinoRuleModal, setCasinoName }) => {
  return (
    <>
      {gameLists?.map((res) => {
        return (
          <div
            className="casino-card-t"
            key={res.image}
            onClick={() => {
              setCasinoRuleModal(true);
              setCasinoName(res?.id);
            }}
          >
            <div
              className="casino_card"
              // style={{ backgroundImage: `url(${res?.image})` }}
            >
               <img width="100%" height="100%" src={res?.image} alt="" />
            </div>
            <div
              className="casion-card-footer"
              // onClick={() => {
              //   setCasinoRuleModal(true);
              //   setCasinoName(res?.id);
              // }}
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
