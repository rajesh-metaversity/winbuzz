
import './style.scss';

const Logout = ({ trigger, setLogutModal }) => {
	return (
		<div className="logout_cont">
			<div className="heading">Logout</div>
			<div className="con">
				<p>Are you Sure you want to Logout</p>
				<div className="btn">
					<button onClick={() => setLogutModal(false)}>Cancel</button>
					<button onClick={() => trigger()}>Continue</button>
				</div>
			</div>
		</div>
	);
};

export default Logout;
