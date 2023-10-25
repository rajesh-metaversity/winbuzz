import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './styles.scss';
import AddIcon from '@mui/icons-material/Add';

const Deposit = () => {
    const depositAMount = [+100,+500, "+1k", "+5k", "+10k", "+25k"  ]
	const depositFooter = ['Amount', 'Image', 'Date', 'Status'];
	return (
		<div className="deposit_cont">
			<div className="dep-heading">Deposit</div>
			<div className="deposit_amount">
                <div className="left">
                    <p>Enter Amount</p>
                    <span className='left_span'>
                    <button>-</button>
                    <input />
                        <button>+</button>
                        </span>
                </div>
                <div className="right">
                    {depositAMount.map((item, index) => {
                        return (
                            <button key={index}> {item }</button>
                        )
                    })}
                    
                </div>
			</div>
			<div className="middle_cont">
				<span className='pay'>
					<p>Pay 0</p>
					<p>Pay manually</p>
					<input />
                </span>

                <div  className='lebel'>
                    <label>

                        <div className='icon_span'>
                        <AddIcon />
                            <p>Click here to upload payment screenshot</p>

                        </div>
                    <input type='file' placeholder='omnCLICNCJD sdkjvb ds' hidden />
                    </label>
                    </div>

				<button className='submit_button'>Submit</button>
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
                <div className='deposit_table'>
                <TableContainer  sx={{ borderRadius: 0 }}>
					<Table  aria-label="customized table">
						<TableHead sx={{ borderRadius: 0 }}>
							<TableRow
								sx={{
									'& .MuiTableCell-root': {
										padding: '8px'
									}
								}}>
								<TableCell>Sr No</TableCell>
								<TableCell align="left">Amount</TableCell>
								<TableCell align="left">Image&nbsp;</TableCell>
								<TableCell align="left">Date&nbsp;</TableCell>
								<TableCell align="left">Status&nbsp;</TableCell>
							</TableRow>
						</TableHead>
						{/* <TableBody>


									<TableRow>
										<TableCell component="th" scope="row">
											{res?.sno}
										</TableCell>
										<TableCell align="left">{res?.date}</TableCell>
										<TableCell align="left" sx={{ color: res?.credit >= 0 ? 'green' : 'red' }}>
											{res?.credit}
										</TableCell>
										<TableCell align="left" sx={{ color: res?.debit >= 0 ? 'green' : 'red' }}>
											{res?.debit}
										</TableCell>
										<TableCell align="left">{res?.pts}</TableCell>
										<TableCell align="left">{res?.remark}</TableCell>
									</TableRow>


						</TableBody> */}
					</Table>
                    </TableContainer>
                    </div>
			</div>
		</div>
	);
};

export default Deposit;
