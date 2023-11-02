import { Box, Container, FormControl, Grid, MenuItem, Select, Tab, Tabs, TextField, Typography, useTheme } from "@mui/material";
import './styles.scss';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useBankAccountQuery, useWithdrawBalanceMutation, useWithdrawQuery, useWithdrawStakeQuery } from '../../Services/withdraw/Withdraw';
import Upi from './Upi';
import Bank from './Bank';
import Previouswithdraw from './Previouswithdraw';
import WithdrawButton from './WithdrawButton';
import Paytm from './Paytm';
import { toast } from 'react-toastify';
import Loader from '../../component/Loader/Loader';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
			{value === index && <Box sx={{ p: 0 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

const Withdraw = () => {
	const [withdrawDetails, setWithdrawDetails] = useState({
		accountHolderName: '',
		bankName: '',
		accountType: '',
		amount: '',
		ifsc: '',
		accountNumber: '',
		withdrawType: '',
		withdrawMode: ''
	});

	console.log(withdrawDetails, 'sdvcdsv');
	const [userWithdrawDetails, setUserWithdrawDetails] = useState([]);

	const theme = useTheme();
	const [value, setValue] = useState(0);
	const [border, setBorder] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		setBorder(newValue);
	};

	const { data: paymentImage, error: withdrawError, isLoading: paymentImageLoading } = useWithdrawQuery();

	const { data: stakeBalance, error: stakeError, isLoading: stakeLoading } = useWithdrawStakeQuery();

	const { data: accountDetails, error: bankError, isLoading: bankDetailsLoading } = useBankAccountQuery();

	console.log('accountDetails', accountDetails);
	const imageHandler = (id, id2) => {
		console.log(id2, 'id2');
		const withdrawDetail = accountDetails?.data?.filter(el => el.withdrawType == id);
		setUserWithdrawDetails(withdrawDetail);
		setWithdrawDetails(prev => {
			return {
				...prev,
				withdrawType: id2
			};
		});
	};

	const [trigger, { data: withdrawBalance, status, error, isError, isLoading }] = useWithdrawBalanceMutation();

	console.log(withdrawBalance, 'withdrawBalance');
	useEffect(() => {
		try {
			if (withdrawBalance) {
				toast.success(withdrawBalance?.message);
			} else {
				toast.error(error?.data?.message);
			}
		} catch (error) {
			toast.error(error?.data?.message);
		}
	}, [withdrawBalance, error]);

	const withdrawHandler = () => {
		trigger(withdrawDetails);
	};

	const valueChangeHandler = (name, value) => {
		console.log(value,"val")
		setWithdrawDetails((prev) => {
			return {
				...prev, 
				[name]: value
			}
		})
	}
	console.log(withdrawDetails, "withdrawasdcs")
	// console.log(isLoading, "isLOADING")
	// debugger

	return (
		<Container maxWidth="lg" className="container">
			<Box className="withdrawparent">
				<Box className="heading">
					<Typography component="p">Withdraw</Typography>
				</Box>
			</Box>

			<Grid container className="inputwithbutton">
				<Grid item xs={12} md={3}>
					<Typography className="wc" component="p">
						Withdraw Coins
					</Typography>
					<TextField
						variant="outlined"
						value={withdrawDetails?.amount}
						onChange={e =>
							setWithdrawDetails(prev => {
								return {
									...prev,
									amount: e.target.value
								};
							})
						}
						size="small"
						className="withdrawcoins"
						placeholder="Withdraw Coins"
					/>
				</Grid>
				<Grid item xs={12} md={9} className="rightcol">
					<Typography component="p" className="ft">
						Choose From your favourite transaction
					</Typography>

					<Box className="buttonstakeparent">
						{stakeBalance?.data?.map((stake, id) => (
							<button
								key={id + stake}
								className="stakebutton"
								size="large"
								onClick={e =>
									setWithdrawDetails(prev => {
										return {
											...prev,
											amount: +withdrawDetails?.amount + +stake?.value
										};
									})
								}>
								{stake?.key}
							</button>
						))}
					</Box>
				</Grid>
			</Grid>

			<FormControl sx={{ m: 0 }} className="select_">
				<Select
					onChange={e =>
						setWithdrawDetails(prev => {
							return {
								...prev,
								withdrawMode: e.target.value
							};
						})
					}
					value={withdrawDetails?.withdrawMode}
					sx={{
						'& .mui-focused & .muioutlinedinput-notchedoutline': {
							border: '1px solid #484850',
							borderradius: '5px 5px 0 0'
						}
					}}
					size="small"
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={'INSTANT'}>INSTANT</MenuItem>
					<MenuItem value={'NORMAL'}>NORMAL</MenuItem>
				</Select>
			</FormControl>

			<Box sx={{ bgcolor: 'background.paper' }} className="paymentstabs">
				<Box className="tabsparent">
					<Tabs
						sx={{
							justifyContent: 'space-evenly',

							'& .MuiTabs-flexContainer': {
								justifyContent: 'space-evenly',
								padding: { md: '0 40px', xs: '0' },
								width: '100%',
								flexWrap: 'wrap !important'
							}
						}}
						className="tabs"
						value={value}
						onChange={handleChange}
						TabIndicatorProps={{
							style: { display: 'none' }
						}}
						textColor="inherit"
						variant="fullWidth"
						aria-label="full width tabs example">
						{paymentImage?.data?.map((imgdata, index) => (
							<Tab
								TouchRippleProps={{
									style: {
										display: 'none'
									}
								}}
								className="tab"
								key={imgdata.id + index + imgdata?.withdrawType}
								sx={{ border: `${value === index ? '1px solid #b6842d' : 0}` }}
								label={
									<div onClick={() => imageHandler(imgdata?.withdrawType, imgdata.id)}>
										<img src={imgdata.image} className="tabImg" />
										<Typography component="p" sx={{ fontSize: 14, marginTop: 1 }}>
											{imgdata?.withdrawType}
										</Typography>
									</div>
								}
							/>
						))}
					</Tabs>
				</Box>

				<TabPanel value={value} index={0}>
					<Bank valueChangeHandler={valueChangeHandler} bankDetails={userWithdrawDetails} bankDetailsLoading={bankDetailsLoading} setWithdrawDetails={setWithdrawDetails} withdrawDetail={withdrawDetails} />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Upi valueChangeHandler={valueChangeHandler} upiDetails={userWithdrawDetails} setWithdrawDetails={setWithdrawDetails} withdrawDetail={withdrawDetails} />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Paytm valueChangeHandler={valueChangeHandler} paytmDetails={userWithdrawDetails} setWithdrawDetails={setWithdrawDetails} withdrawDetail={withdrawDetails} />
				</TabPanel>

				<WithdrawButton  withdrawHandler={withdrawHandler} name={isLoading ? <Loader /> : 'withdraw coins'} disable={isLoading} />

				<Previouswithdraw />
			</Box>
		</Container>
	);
};

export default Withdraw