import "./style.scss";
import { useNavigate } from "react-router-dom";

const CasinoCard = ({
  gameLists,
  providerFilter,
  setCasinoRuleModal,
  setCasinoName,
}) => {

  return (
    <>
      {gameLists?.map((res) => {

        if (res?.category?.includes(providerFilter) || providerFilter === "ALL")
          return (
            <>
              <div
                className="casino-card-t"
                onClick={() => {
                  setCasinoRuleModal(true);
                  setCasinoName(res?.id);
                }}
              >
                <div
                  className="casino_card"
                  style={{ backgroundImage: `url(${res?.images[1].url})` }}
                ></div>
                <div className="casion-card-footer">Play Now</div>
              </div>
            </>
          );
      })}

      {/* {gameLists?.map((item) => {
				
			})} */}
    </>
  );
};

export default CasinoCard;
