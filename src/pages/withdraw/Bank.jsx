import {
	FormControl,
	FormControlLabel,
	Grid,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Paper,
	Radio,
	RadioGroup,
	Select,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	styled
} from '@mui/material';
import TableCell, { tableCellClasses,  } from '@mui/material/TableCell';
import { useState } from 'react';
const Bank = ({ bankDetails, setWithdrawDetails,withdrawDetail  }) => {
	const [radioValue, setRadioValue] = useState()
	const [selectedField, setSelectedField] = useState(null)
	const tableheading = ['account number', 'Account Holder Name', 'Bank Name/Address', 'IFSC Code', 'Account Type/ Currency', 'action'];

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

	const bankHandler = (id, event) => {
		setRadioValue(id.target.value);
        console.log(event, "sdcs")
        setSelectedField(event)
        setWithdrawDetails({...withdrawDetail,...event})
	}


	return (
		<div>
			<Grid container sx={{ md: { gap: '1rem', xs: 0 } }}>
				<Grid item xs={0.5}></Grid>
				<Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
					<FormControl sx={{ maxWidth: { md: '200px', xs: '100%' }, my: 1, width: '100%' }} variant="outlined">
						<Typography component="p" sx={{ fontSize: '14px' }}>
							Account Number
						</Typography>
						<OutlinedInput
							size="small"
							sx={{ width: '100%' }}
							id="outlined-adornment-weight"
							aria-describedby="outlined-weight-helper-text"
							value={selectedField?.accountNumber}
							inputProps={{
								'aria-label': 'weight'
							}}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					<FormControl sx={{ my: 1, width: '100%', maxWidth: { md: '200px', xs: '100%' } }} variant="outlined">
						<Typography component="p" sx={{ fontSize: '14px' }}>
							Account Name
						</Typography>
						<OutlinedInput
							size="small"
							id="outlined-adornment-weight"
							aria-describedby="outlined-weight-helper-text"
							value={selectedField?.accountHolderName}
							inputProps={{
								'aria-label': 'weight'
							}}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					<FormControl sx={{ my: 1, width: '100%', maxWidth: { md: '200px', xs: '100%' } }} variant="outlined">
						<Typography component="p" sx={{ fontSize: '14px' }}>
							Bank Name
						</Typography>
						<OutlinedInput
							size="small"
							id="outlined-adornment-weight"
							aria-describedby="outlined-weight-helper-text"
							value={selectedField?.bankName}
							inputProps={{
								'aria-label': 'weight'
							}}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					<FormControl sx={{ my: 1, width: '100%', maxWidth: { md: '200px', xs: '100%' } }} variant="outlined">
						<Typography component="p" sx={{ fontSize: '14px' }}>
							IFSC
						</Typography>
						<OutlinedInput
							size="small"
							id="outlined-adornment-weight"
							aria-describedby="outlined-weight-helper-text"
							value={selectedField?.ifsc}
							inputProps={{
								'aria-label': 'weight'
							}}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					<FormControl sx={{ my: 1, width: '100%', maxWidth: { md: '200px', xs: '100%' } }}>
						<Typography component="p" sx={{ fontSize: '14px' }}>
							Account Type
						</Typography>
						<Select
							sx={{
								'& .mui-focused & .muioutlinedinput-notchedoutline': {
									border: '1px solid #484850',
									borderradius: '5px 5px 0 0'
								}
							}}
							size="small"
							value={selectedField?.accountType}
							displayEmpty
							inputProps={{ 'aria-label': 'Without label' }}>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={"Savings"}>Savings</MenuItem>
							<MenuItem value={"Current"}>Current</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={0.5}></Grid>
			</Grid>

			<TableContainer component={Paper} sx={{ borderRadius: 0 }}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							{tableheading?.map((heading, index) => (
								<StyledTableCell key={index + heading} sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
									{heading}
								</StyledTableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{bankDetails?.map((bankData, index) => (
                            <StyledTableRow key={bankData?.accountNumber + index}>
                               
                                    <StyledTableCell key={index} StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                        {bankData?.accountNumber}
                                </StyledTableCell>
                                <StyledTableCell key={index} StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                        {bankData?.accountHolderName}
                                </StyledTableCell>
                                <StyledTableCell key={index} StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                        {bankData?.bankName}
                                </StyledTableCell>
                                <StyledTableCell key={index} StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                        {bankData?.ifsc}
                                </StyledTableCell>
                                <StyledTableCell key={index} StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                        {bankData?.accountType}
                                </StyledTableCell>
								<StyledTableCell>
								<input type="radio" name="upiRadio" value={radioValue} onChange={event => bankHandler(event, bankData)} />

                                {/* <RadioGroup aria-labelledby="demo-radio-buttons-group-label"  name="radio-buttons-group" onChange={bankSelectHandler}>
                                <FormControlLabel value={true } control={<Radio />}  />
							</RadioGroup> */}
                            </StyledTableCell>
                            </StyledTableRow>
                             ))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Bank;
