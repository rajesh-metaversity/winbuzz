import "./styles.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { home } from "../../routes/PagesUrl";
import { useMediaQuery } from "@mui/material";
import ModalComponent from "../modal/Modal";
import MyBetsModule from "../myBetsModule/MyBetsModule";

const Iframes = ({ odds, id }) => {
  const [toggle, setToggle] = useState(false);
  const params = useParams();

  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  const [open, setOpen] = useState(false);

  const modalHandlerOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <ModalComponent
        Elememt={<MyBetsModule cross={true} setOpen={setOpen}/>}
        open={open}
        setOpen={setOpen}
        
      />
      <div className="scorecard_heading">
        <p>
          <Link to={home}>
            <ArrowBackIcon />
          </Link>
          {/* {odds?.Odds?.map((data) => console.log(data.matchName, "data"))} */}
          {/* {odds?.Odds?.map((el) => {
            return (
              <>
                <p>{el?.eventTime }</p>

              </>
            )
          })} */}
          <strong className="matchName">
            {odds?.Odds?.length ? odds?.Odds[0].matchName : ""}
          </strong>
          <stong className="matchTime">
            {odds?.Odds?.length ? odds?.Odds[0].eventTime : ""}
          </stong>
        </p>

        {id !== 1 && (
          <button onClick={() => setToggle(!toggle)} className="score_btn">
            <RemoveRedEyeIcon />
            Score
          </button>
        )}
      </div>
      {isBreakPoint && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "clac(100% - 8px)",
            paddingBlock: "3px",
            paddingInline: "4px",
          }}
        >
          <div className="match-tim" style={{ fontSize: "12px" }}>
            {odds?.Odds?.length ? odds?.Odds[0].eventTime : ""}
          </div>
          <div className="betsh" onClick={modalHandlerOpen}>
            Bets
          </div>
        </div>
      )}

      {id !== 1 && (
        <div className={toggle ? "score_board2" : "score_board"}>
          {/* <iframe src={`https://score.247idhub.com/go-score/template/${params.sportId}/${params.id}`}></iframe> */}
          <iframe
            src={`https://score.247idhub.com/index.html/event/${params.id}?theme=crazy-diamond`}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Iframes;
