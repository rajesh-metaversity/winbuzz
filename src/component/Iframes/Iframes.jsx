import "./styles.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { home } from "../../routes/PagesUrl";

const Iframes = ({ odds, id }) => {
  const [toggle, setToggle] = useState(false);
  const params = useParams();

  return (
		<>
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
					<strong>{odds?.Odds?.length ? odds?.Odds[0].matchName : ''}</strong>
					<stong>{odds?.Odds?.length ? odds?.Odds[0].eventTime : ''}</stong>
				</p>
				{id !== 1 && (
					<button onClick={() => setToggle(!toggle)} className="score_btn">
						<RemoveRedEyeIcon />
						Score
					</button>
				)}
			</div>
			{id !== 1 && (
				<div className={toggle ? 'score_board2' : 'score_board'}>
					<iframe src={`https://score.247idhub.com/go-score/template/${params.sportId}/${params.id}`}></iframe>
				</div>
			)}
		</>
  );
};

export default Iframes;
