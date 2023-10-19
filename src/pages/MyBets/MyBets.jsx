// import { Table } from '@mui/material/Table'
import { useEffect, useState } from 'react';
import { useMyBetsMutation } from '../../Services/MyBets/MyBets';
import './MyBets.scss';
import {RadioStyled} from './styled'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const MyBets = () => {
	const [bets, setBets] = useState({
		noOfRecords: 1,
		index: 0,
		sportType: 1,
		isDeleted: false,
		betType: 1,
		totalPages: 1
	});

	const [trigger, { data, isLoading, isError }] = useMyBetsMutation();

	useEffect(() => {
		trigger(bets);
	}, [bets.betType, bets.isDeleted]);

	console.log(data?.data, 'MYBETSdata');
	const rows = [
		{ id: 1, name: 'John Doe', age: 30, address: '123 Main St' }
		// Add more data as needed
	];

	const matchedHandler = (name, el) => {
		setBets(prev => {
			return {
				...prev,
				isDeleted: el
			};
		});
		console.log(el, 'el');
	};

	const handleChange = e => {
		setBets(prev => {
			return {
				...prev,
				betType: e.target.value
			};
		});
	};

	return (
		<div className="bets_cont">
			<div className="combo">
				<div className="left">
					<p>My Bets</p>

					<div className="matched" >
						<RadioStyled>
							<RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Matched" name="radio-buttons-group" onChange={matchedHandler}>
                                <FormControlLabel value={true } control={<Radio />} label="Matched" />
								<FormControlLabel value={false} control={<Radio />} label="UnMatched" />
							</RadioGroup>
						</RadioStyled>
					</div>
				</div>
				<div className="right">
					<span>
						<label>Types</label>
						<select onChange={handleChange} value={bets?.betType}>
							<option value={1}>All</option>
							<option value={2}>Back</option>
							<option value={3}>Lay</option>
						</select>
					</span>
					<span>
						<label>From</label>
						<input type="date" />
					</span>
					<span>
						<label>To</label>
						<input type="date" />
					</span>
					<button>Search</button>
				</div>
				<div className='pdf-excel'><span className='pdf'>pdf</span><span className='excel'>exel</span></div>

			</div>

			<div className='mybets_table'>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell >Event Name</TableCell>
							<TableCell>Nation</TableCell>
							<TableCell>Bet Type</TableCell>
							<TableCell>User Rate</TableCell>
							<TableCell>Amount</TableCell>
							<TableCell>Profit/Loss</TableCell>
							<TableCell>Place Date</TableCell>
							<TableCell>Match Date</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className='bet_table-body'>
						{data?.data?.dataList.map(row => (
							<TableRow key={row.id}>
								{/* <TableCell>{row.id}</TableCell> */}
								<TableCell>{row.eventName}</TableCell>
								<TableCell>{row.nation}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell>{row.rate}</TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>{row.pnl}</TableCell>
                                <TableCell>{row.time}</TableCell>
                                <TableCell>{row.address}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				</TableContainer>
				</div>
		</div>
	);
};

export default MyBets