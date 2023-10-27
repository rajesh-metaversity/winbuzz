import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './styles.scss';
import AddIcon from '@mui/icons-material/Add';
import { useDepositBankQuery, useDepositbalanceQuery, useDepositbalanceSubmitMutation, useStakeQuery } from '../../Services/stake/Deposit';
import { useEffect, useState } from 'react';
import Bank from './Bank';
import UPI from './UPI';
import QR from './QR';

const Deposit = () => {
	const [files, setFiles] = useState(null);
	const [amount, setAmount] = useState(0);
	const [bank, setBank] = useState([]);
	const [selectedImage, setSelectedImage] = useState(null);

	const { data: depositData, isLoading: load, isError: error } = useStakeQuery();
	const { data, isLoading, isError } = useDepositBankQuery();
	const { data: balance, isLoading: balanceLoading, isError: Error } = useDepositbalanceQuery();
	const [trigger, { data: submitBalance, isLoading: submitLoading, isError: submitError }] = useDepositbalanceSubmitMutation();

	const bankHandler = () => {
		setBank(data);
	};

	const [depositKey, setDepositKey] = useState(0);
	const handleClickImage = (imageData, key) => {
		setSelectedImage(imageData);
		setDepositKey(key);
	};

	const bankDetailObj = {
		0: <Bank selectedImage={selectedImage || data?.data[0]} />,
		1: <UPI selectedImage={selectedImage} />,
		2: <QR selectedImage={selectedImage} />
	};

	const key = {
		BANK: 0,
		UPI: 1,
		QR: 2
	};

	const depositSubmitHandler = () => {
		const submitData = new FormData();
		submitData.append('amount', amount);
		submitData.append('image', files || '');
		trigger(submitData);
		console.log(submitData, 'submitdata');
	};

	return (
		<div className="deposit_cont">
			<div className="dep-heading">Deposit</div>
			<div className="deposit_amount">
				<div className="left">
					<p>Enter Amount</p>
					<span className="left_span">
						<button onClick={() => setAmount(amount - 10)} style={{ cursor: 'pointer' }}>
							-
						</button>
						<input value={amount} onChange={e => setAmount(e.target.value)} />
						<button onClick={() => setAmount(amount + 10)} style={{ cursor: 'pointer' }}>
							+
						</button>
					</span>
				</div>
				<div className="right">
					{depositData?.data?.map((item, index) => {
						return (
							<button
								key={index}
								onClick={() => {
									setAmount(amount + item.value);
									bankHandler();
								}}>
								{item?.key}
							</button>
						);
					})}
				</div>
			</div>
			<div className="middle_cont">
				<span className="pay">
					<p>Pay {amount}</p>
					<p>Pay manually</p>
					{amount > 0 && (
						<p className="image_cont">
							{bank?.data?.map((el, index) => {
								return (
									<>
										<div key={index} className="image_sub-cont">
											<img
												src={el?.image}
												alt="image"
												onClick={() => {
													setDepositKey();
													handleClickImage(el, key[el?.depositType]);

													// handleClickImage(el);
												}}
											/>
										</div>
									</>
								);
							})}
						</p>
					)}
					{amount > 0 && <div className="payment_cont">{bankDetailObj[depositKey]}</div>}
				</span>

				{amount > 0 && (
					<div className="lebel">
						<label>
							{files ? (
								files.name
							) : (
								<div className="icon_span">
									<AddIcon />
									<p>Click here to upload payment screenshot</p>
								</div>
							)}
							<input
								value={''}
								onChange={e => {
									if (e.target.files?.length) {
										if (e.target.files[0]?.type.includes('image')) {
											setFiles(e.target.files[0]);
										} else {
											// setColor("danger");
											// setMessege("Only image files allowed.");
											// setAlertBtnshow(true);
											// setIsLoading(false);
										}
									}
								}}
								type="file"
								accept="image/*"
								hidden
							/>
						</label>
					</div>
				)}

				<button className="submit_button" onClick={() => depositSubmitHandler()}>
					Submit
				</button>
			</div>
			<div className="footer">
				<p>Previous Deposit</p>
				{/* <div className='footer-bottom'>
					  {depositFooter.map((el, index) => {
						  return (
							  <span key={index}>{el }</span>
						  )
					  })}
				  </div> */}
				<div className="deposit_table">
					<TableContainer sx={{ borderRadius: 0 }}>
						<Table aria-label="customized table">
							<TableHead sx={{ borderRadius: 0 }} className="deposit_table-head">
								<TableRow
									sx={{
										'& .MuiTableCell-root': {
											padding: '8px'
										}
									}}>
									<TableCell align="left">Amount</TableCell>
									<TableCell align="left">Image&nbsp;</TableCell>
									<TableCell align="left">Date&nbsp;</TableCell>
									<TableCell align="left">Status&nbsp;</TableCell>
								</TableRow>
							</TableHead>
							<TableBody className="table_body">
								{balance?.data?.map((item, index) => (
									<TableRow key={index}>
										<TableCell align="left">{item?.amount}</TableCell>
										<TableCell align="left">
											<img src={item?.image} />
										</TableCell>
										<TableCell align="left">{item?.time}</TableCell>
										<TableCell align="left" className="table_td">
											{item?.status}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
		</div>
	);
};

export default Deposit;