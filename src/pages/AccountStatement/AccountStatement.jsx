import { Table, TableContainer, TableHead, TableRow } from '@mui/material'
import './AccountStatement.scss'
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { useAccountStatementMutation } from '../../Services/accountStatement/AccountStatement';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import FilterAccountStatement from './FilterAccountStatement';
const dateFormat = 'YYYY-MM-DD';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#333333',
		color: theme.palette.common.white,
		border: `1px solid ${theme.palette.common.white}`,
		fontSize: 12
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		border: '1px solid grey'
	}
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover
	}
	// hide last border
	// '&:last-child td, &:last-child th': {
	//     border: 0,
	// },
}));


const AccountStatement = () => {
	const [accountStatementBody, setAccountStatementBody] = useState({
		noOfRecords: 1,
		index: 0,
		fromDate: dayjs().subtract(7, 'day'),
		toDate: dayjs(),
		type: 1,
		totalPages: 1
	});
	const [trigger, { data, isLoading, isError }] = useAccountStatementMutation();

	useEffect(() => {
		submit();
		if (data?.data?.dataList) {
			setAccountStatementBody({
				...accountStatementBody,
				totalPages: data?.data?.totalPages || 1
			});
		}
	}, [accountStatementBody.index, accountStatementBody.noOfRecords]);
	const submit = () => {
		const accountStatementBody2 = { ...accountStatementBody };
		accountStatementBody2.fromDate = accountStatementBody2.fromDate.format(dateFormat);
		accountStatementBody2.toDate = accountStatementBody2.toDate.format(dateFormat);
		trigger(accountStatementBody2);
	};
	return (
		<div className="account_statement_section">
			<FilterAccountStatement setAccountStatementBody={setAccountStatementBody} accountStatementBody={accountStatementBody} submit={submit} />
			<div className='account-statement-table'>
				<TableContainer component={Paper} sx={{ borderRadius: 0 }}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead sx={{ borderRadius: 0 }}>
							<TableRow
								sx={{
									'& .MuiTableCell-root': {
										padding: '8px'
									}
								}}>
								<StyledTableCell>Sr No</StyledTableCell>
								<StyledTableCell align="left">Date</StyledTableCell>
								<StyledTableCell align="left">Credit&nbsp;</StyledTableCell>
								<StyledTableCell align="left">Debit&nbsp;</StyledTableCell>
								<StyledTableCell align="left">Balance&nbsp;</StyledTableCell>
								<StyledTableCell align="left">Remark</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data?.data?.dataList.map(res => {
								return (
									<StyledTableRow key={res.name}>
										<StyledTableCell component="th" scope="row">
											{res?.sno}
										</StyledTableCell>
										<StyledTableCell align="left">{res?.date}</StyledTableCell>
										<StyledTableCell align="left" sx={{ color: res?.credit >= 0 ? 'green' : 'red' }}>
											{res?.credit}
										</StyledTableCell>
										<StyledTableCell align="left" sx={{ color: res?.debit >= 0 ? 'green' : 'red' }}>
											{res?.debit}
										</StyledTableCell>
										<StyledTableCell align="left">{res?.pts}</StyledTableCell>
										<StyledTableCell align="left">{res?.remark}</StyledTableCell>
									</StyledTableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
};

export default AccountStatement
