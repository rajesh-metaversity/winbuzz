import { MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatStyles, SelectStyles } from './styles';
import dayjs from 'dayjs';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileOpenIcon from '@mui/icons-material/FileOpen';

const FilterAccountStatement = ({ setAccountStatementBody, accountStatementBody, submit, searchHandler }) => {
	const handleChange = (name, e) => {
		const value = e;
		if (name == 'toDate') {
			setAccountStatementBody(prev => {
				return {
					...prev,
					toDate: value
				};
			});
		} else if (name == 'fromDate') {
			setAccountStatementBody(prev => {
				return {
					...prev,
					fromDate: value
				};
			});
		}
	};

	const typeHandler = event => {
		setAccountStatementBody(prev => {
			return {
				...prev,
				type: event.target.value
			};
		});
	};

	return (
		<div className="account_st_top">
			<div className="accnt_text_left">Account Statement</div>
			<div className="from_date_right">
				<form
					className="from_date"
					onSubmit={e => {
						e.preventDefault();
						submit();
					}}>
					<div className="input_field">
						<label htmlFor="form">From</label>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatStyles defaultValue={accountStatementBody?.fromDate} format="DD-MM-YYYY" onChange={e => handleChange('fromDate', e)} />
						</LocalizationProvider>
						{/* <DatePicker defaultValue={dayjs('2022-04-17')} /> */}
					</div>
					<div className="input_field">
						<label htmlFor="form">To Date</label>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatStyles defaultValue={accountStatementBody?.toDate} format="DD-MM-YYYY" onChange={e => handleChange('toDate', e)} />
						</LocalizationProvider>
						{/* <DatePicker defaultValue={dayjs('2022-04-17')} /> */}
					</div>
					<div className="input_field">
						<label htmlFor="form">All</label>
						<SelectStyles value={accountStatementBody?.type} onChange={typeHandler}>
							{/* <MenuItem value="">
								<em>None</em>
							</MenuItem> */}
							<MenuItem value={1}>All</MenuItem>
							<MenuItem value={2}>Game Report</MenuItem>
							<MenuItem value={3}>Deposit/Withdraw Report</MenuItem>
						</SelectStyles>
					</div>

					<div className="search">
						<button className="search_btn" onClick={() => searchHandler()}>Search</button>
					</div>
				</form>
			</div>
			{/* <div className="pdf">
				<span className="pdf-icon">
					<PictureAsPdfIcon />
				</span>
				<span className="excel-icon">
					<FileOpenIcon />
				</span>
			</div> */}
		</div>
	);
};

export default FilterAccountStatement;
