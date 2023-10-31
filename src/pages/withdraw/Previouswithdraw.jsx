import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { useWithdrawClientListQuery } from '../../Services/Withdraw/Withdraw';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		border: `1px solid ${theme.palette.common.white}`
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		padding: '10px 10px'
	}
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover
	},
	'&:last-child td, &:last-child th': {
		border: 0
	}
}));

const Previouswithdraw = () => {
	const tableheading = ['Account Number', 'Account Name', 'Amount', 'Bank Name/ Address', 'IFSC Code', 'Account Type / Currency', 'Date', 'Remark', 'Status', 'Action'];
	// const tabledata =
	//     clientList?.data?.map((item) => {

	//         'accountNumber',
	//         'Account Name',
	//         'Amount',
	//         'Bank Name/ Address',
	//         'IFSC Code',
	//         'Account Type / Currency',
	//         'Date',
	//         'Self Rejected',
	//         < Status />,
	//         <ActionButton />

	// } )

	const { data: clientList } = useWithdrawClientListQuery();

	return (
		<Box className="tableparent_">
			<Typography className="tabletopheading">Previous Withdraw</Typography>
			<TableContainer component={Paper} sx={{ borderRadius: 0 }}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							{tableheading?.map((heading, index) => (
								<StyledTableCell key={index + 'a' + heading} sx={{ whiteSpace: 'nowrap', textTransform: 'capitalize' }}>
									{heading}
								</StyledTableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{clientList?.data?.map((rowdata, index) => (
							<StyledTableRow key={rowdata?.accountNumber + index + rowdata?.accountHolderName}>
								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									{rowdata?.accountNumber}
								</StyledTableCell>

								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									{rowdata?.accountHolderName}
								</StyledTableCell>

								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									{rowdata?.amount}
								</StyledTableCell>
								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									{rowdata?.bankName}
								</StyledTableCell>
								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									{rowdata?.ifsc}
								</StyledTableCell>
								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									{rowdata?.accountType}
								</StyledTableCell>
								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									{rowdata?.time}
								</StyledTableCell>
								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									{rowdata?.remark}
								</StyledTableCell>
								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									{rowdata?.status}
								</StyledTableCell>
								<StyledTableCell  StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
									Cancel
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Previouswithdraw;