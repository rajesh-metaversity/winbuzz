import { useEffect, useState } from 'react';
import './styles.scss'
import {RadioStyled} from './styled'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, RadioGroup, FormControlLabel, Radio, Tooltip, IconButton } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import Loader from '../../component/Loader/Loader';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useUnsettledBetsMutation } from '../../Services/UnsettledBets/UnsettledBets';
import NoOfRecords from '../../component/noOfRecords/NoOfRecords';
import Pagination from '../../component/Pagination/Pagination';
const UnsettledBets = () => {
    const [bets, setBets] = useState({
		noOfRecords: 1,
		index: 0,
		sportType: 1,
		isDeleted: false,
		betType: 1,
		totalPages: 1
	});

	const [trigger, { data, isLoading, isError }] = useUnsettledBetsMutation();

	useEffect(() => {
		trigger(bets);
	}, [bets.betType, bets.isDeleted, bets.noOfRecords]);

	

	const matchedHandler = (name, el) => {
		setBets(prev => {
			return {
				...prev,
				isDeleted: el
			};
		});
	};

	const handleChange = e => {
		setBets(prev => {
			return {
				...prev,
				betType: e.target.value
			};
		});
    };
    const rowsHandler = (e) => {
        setBets((prev) => {
          return {
            ...prev,
            noOfRecords: +e.target.value
          }
        })
    }
    
    const searchHandler = () => {
        trigger(bets)

    }
    return (
        <>
		<div className="bets_cont">
			<div className="combo">
				<div className="left">
					<p>Unsettled Bets</p>

					<div className="matched">
						<RadioStyled>
							<RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Matched" name="radio-buttons-group" onChange={matchedHandler}>
								<FormControlLabel value={true} control={<Radio />} label="Matched" />
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

					<button onClick={() => searchHandler()}>Search</button>
				</div>
				{/* <div className="pdf-excel">
					<span className="pdf">
						<PictureAsPdfIcon />
					</span>
					<span className="excel">
						<FileOpenIcon />
					</span>
				</div> */}
				</div>
				<div style={{padding: "0 10px"}} className='records_class'>
					<NoOfRecords handlerselectchange={rowsHandler} />
					</div>

			{isLoading ? (
				<Loader />
			) : (
				<div className="mybets_table">
					<TableContainer component={Paper}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Event Type</TableCell>
									<TableCell>Event Name</TableCell>
									<TableCell>User Name</TableCell>
									<TableCell>M Name</TableCell>
									<TableCell>Nation</TableCell>
									<TableCell>U Rate</TableCell>
									<TableCell>Amount</TableCell>
									<TableCell>Place Date</TableCell>
									<TableCell>Detail</TableCell>
								</TableRow>
							</TableHead>
							<TableBody className="bet_table-body">
								{data?.data?.dataList.map(row => (
									<TableRow key={row.id}>
										{/* <TableCell>{row.id}</TableCell> */}
										<TableCell>{row.eventType}</TableCell>
										<TableCell>{row.eventName}</TableCell>
										<TableCell>{row.username}</TableCell>
										<TableCell>{row.marketname}</TableCell>
										<TableCell>{row.nation}</TableCell>
										<TableCell style={{ color: row.rate >= 0 ? 'green' : 'red' }}>{row.rate}</TableCell>
										<TableCell style={{ color: row.amount >= 0 ? 'green' : 'red' }}>{row.amount}</TableCell>
										<TableCell>{row.time}</TableCell>
										<TableCell>
											{' '}
											<Tooltip title={row.deviceInfo}>
												<IconButton>
													<RemoveRedEyeIcon />
												</IconButton>
											</Tooltip>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			)}
        </div>
            <Pagination setPaginationData={setBets} paginationData={bets} />
            </>

	);
};

export default UnsettledBets;
