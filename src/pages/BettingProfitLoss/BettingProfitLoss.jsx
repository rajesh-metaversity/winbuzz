import { useEffect, useState } from 'react';
import { useBettingProfitLossMutation } from '../../Services/BettingProfitLoss/BettingProfitLoss';
import './BettingProfitLoss.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BettingStyled } from './styled';
const dateFormat = 'YYYY-MM-DD';

const BettingProfitLoss = () => {
	const [bettingPnl, setBettingPnl] = useState({
		sportId: 4,
		fromDate: dayjs().subtract(7, 'day'),
		toDate: dayjs(),
		index: 0,
		matchId: '',
		userId: '',
		noOfRecords: 100,
		totalPages: 1
	});
	const rows = [
		{ id: 1, name: 'John Doe', age: 30, address: '123 Main St' }
		// Add more data as needed
	];

	const [trigger, { data, isLoading, isError }] = useBettingProfitLossMutation();

	useEffect(() => {
		submitHandler();
		if (data?.data?.dataList) {
			setBettingPnl({
				...bettingPnl,
				totalPages: data?.data?.totalPages || 1
			});
		}
	}, [bettingPnl.index, bettingPnl.noOfRecords]);

	const submitHandler = () => {
		const bettingPnl2 = { ...bettingPnl };
		bettingPnl2.fromDate = bettingPnl2.fromDate.format(dateFormat);
		bettingPnl2.toDate = bettingPnl2.toDate.format(dateFormat);
		console.log(bettingPnl2, 'bettingPnl2');

		trigger(bettingPnl2);
	};

	const handleChange = (name, e) => {
		const value = e;
		if (name == 'toDate') {
			setBettingPnl(prev => {
				return {
					...prev,
					toDate: value
				};
			});
		} else if (name == 'fromDate') {
			setBettingPnl(prev => {
				return {
					...prev,
					fromDate: value
				};
			});
		}
	};
	// useEffect(() => {
	//   trigger(bettingPnl)
	// }, [])

	return (
		<div className="betting_profit-loss_cont">
			<div className="right">
				<p>betting profit loss</p>
				<div className="dates_cont">
					<div className="right_date">
						<label htmlFor="form">Form</label>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<BettingStyled defaultValue={bettingPnl?.fromDate} format="DD-MM-YYYY" onChange={e => handleChange('fromDate', e)} />
						</LocalizationProvider>
					</div>
					<div className="right_date">
						<label htmlFor="form">To Date</label>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<BettingStyled defaultValue={bettingPnl?.toDate} format="DD-MM-YYYY" onChange={e => handleChange('toDate', e)} />
						</LocalizationProvider>
					</div>
					<button
						className="search_button"
						onClick={e => {
							e.preventDefault();
							submitHandler();
						}}>
						Search
					</button>
				</div>
			</div>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>No</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Event Type</TableCell>
							<TableCell>Event</TableCell>
							<TableCell>Amount</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.id}>
								<TableCell>{row.id}</TableCell>
								<TableCell>{row.name}</TableCell>
								<TableCell>{row.age}</TableCell>
								<TableCell>{row.address}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default BettingProfitLoss;
