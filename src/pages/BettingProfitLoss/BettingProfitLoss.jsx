import { useEffect, useState } from "react";
import { useBettingProfitLossMutation } from "../../Services/BettingProfitLoss/BettingProfitLoss";
import "./BettingProfitLoss.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
} from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BettingStyled, SelectStyles } from "./styled";
import { useActiveSportQuery } from "../../Services/ActiveSportList/ActiveSportList";
import { useActiveMatchMutation } from "../../Services/ActiveSportList/ActiveMatch";
import Loader from "../../component/Loader/Loader";
import Empty from "../../component/empty/Empty";
const dateFormat = "YYYY-MM-DD";

const BettingProfitLoss = () => {
  const { data: activSport, isLoadin, isErro } = useActiveSportQuery();
  const [triger, { data: matchData, isLoadi, isErrr }] =
    useActiveMatchMutation();

  const [bettingPnl, setBettingPnl] = useState({
    sportId: "",
    fromDate: dayjs().subtract(7, "day"),
    toDate: dayjs(),
    index: 0,
    matchId: "",
    userId: "",
    noOfRecords: 100,
    totalPages: 1,
  });

  // Add more data as needed

  const [trigger, { data, isLoading, isError }] =
    useBettingProfitLossMutation();

  useEffect(() => {
    submitHandler();
    if (data?.data?.dataList) {
      setBettingPnl({
        ...bettingPnl,
        totalPages: data?.data?.totalPages || 1,
      });
    }
  }, [bettingPnl.index, bettingPnl.noOfRecords]);

  const submitHandler = () => {
    const bettingPnl2 = { ...bettingPnl };
    bettingPnl2.fromDate = bettingPnl2.fromDate.format(dateFormat);
    bettingPnl2.toDate = bettingPnl2.toDate.format(dateFormat);
    trigger(bettingPnl2);
  };

  const handleChange = (name, e) => {
    const value = e;
    if (name == "toDate") {
      setBettingPnl((prev) => {
        return {
          ...prev,
          toDate: value,
        };
      });
    } else if (name == "fromDate") {
      setBettingPnl((prev) => {
        return {
          ...prev,
          fromDate: value,
        };
      });
    }
  };

  const getMatchDetail = (id) => {
    setBettingPnl((prev) => {
      return {
        ...prev,
        sportId: id,
      };
    });
    triger(id);
  };

  const matchHandler = (name) => {
    setBettingPnl((prev) => {
      return {
        ...prev,
        matchId: name,
      };
    });
  };
console.log(data?.data, 'data?.data');
if (isLoading) {
	return <Loader />;
} else {
	return (
		<div className="betting_profit-loss_cont">
			<div className="right">
				<p>betting profit loss</p>
				<div className="dates_cont">
					<div className="input_field">
						<label htmlFor="form" style={{ fontSize: '12px' }}>
							Select Sport
						</label>
						<SelectStyles onChange={e => getMatchDetail(e.target.value)} value={bettingPnl.sportId}>
							{activSport?.data?.map(curElm => (
								<MenuItem key={curElm.sportId} value={curElm?.sportId}>
									{curElm?.sportName}
								</MenuItem>
							))}
						</SelectStyles>
					</div>

					<div className="input_field">
						<label htmlFor="form" style={{ fontSize: '12px' }}>
							Select Match
						</label>
						<SelectStyles onChange={e => matchHandler(e.target.value)} value={bettingPnl?.matchId} disabled={matchData?.data ? false : true}>
							{matchData?.data?.map(el => (
								<MenuItem value={el?.matchId} key={el?.matchId}>
									{el?.matchName}
								</MenuItem>
							))}
						</SelectStyles>
					</div>

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

			<div className="mybets_table">
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Match Name</TableCell>
								<TableCell>pnl</TableCell>
								<TableCell>uplineAmount</TableCell>
								<TableCell>Date</TableCell>
								{/* <TableCell>Action</TableCell> */}
							</TableRow>
						</TableHead>
						{data?.data?.market?.length ? (
							<TableBody className="bet_table-body">
								{data?.data?.market.map(row => (
									<TableRow key={row?.id + row?.name}>
										<TableCell>{row?.matchName}</TableCell>
										<TableCell>{row?.pnl}</TableCell>
										<TableCell>{row?.uplineAmount}</TableCell>
										<TableCell>{row?.createdon}</TableCell>
										{/* <TableCell>{row?.action}</TableCell> */}
									</TableRow>
								))}
							</TableBody>
						) : (
							<TableBody className="bet_table-body">
								<TableRow>
									<TableCell></TableCell>
									<TableCell>
										<Empty />
									</TableCell>
									<TableCell></TableCell>
								</TableRow>
							</TableBody>
						)}
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}
};

export default BettingProfitLoss;
