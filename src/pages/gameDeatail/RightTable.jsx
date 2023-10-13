import './RightTable.scss';

const RightTable = () => {
    const betNumberArray = [50, 10, 60, 800, 50, 30, 33, 33]

    const minMax = ["Min", "Max", "All", "Clear"]
    const buttonColors = ["#ffce00", "#75b7ff", "#a5ff93", "#fffc9f"];
	return (
		<div className="right_cont">
			<div className="heading">
				<span className='bet_slip'>Bet Slip</span>
				<span className='close'>Close</span>
			</div>

			<div className="bet_details">
				<span className="team_name">
					<p>New Zealand vs Bangladesh</p>
					<p>New Zealand</p>
				</span>
				<div className="bet_number">
					<span className="odds">
						<label>Odds</label>
					</span>
					<span className="bet_inputs">
						<input type="number" />
						<input />
					</span>
				</div>
                <span className='numbers'>{betNumberArray.map(el => <p key={el} className='bets'>{el }</p>) }</span>
                <span className='min_max'>{minMax.map((items, index) => <p key={items} style={{background: buttonColors[index]}} className='inner'>{items }</p>) }</span>
                <span className='order_buttons'>
                    <button>Cancel Order</button>
                    <button>Place Order</button>
                </span>
			</div>
		</div>
	);
};

export default RightTable;
