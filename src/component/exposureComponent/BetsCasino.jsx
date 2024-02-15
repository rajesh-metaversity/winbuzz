import { useEffect, useState } from "react";
import "./styles.scss";
import { RadioStyled } from "./styled";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tooltip,
  IconButton,
} from "@mui/material";

import Loader from "../Loader/Loader";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useUnsettledBetsMutation } from "../../Services/UnsettledBets/UnsettledBets";
import NoOfRecords from "../noOfRecords/NoOfRecords";
import Pagination from "../Pagination/Pagination";

const BetsCasino = () => {
  const [bets, setBets] = useState({
    noOfRecords: 1,
    index: 0,
    sportType: 2,
    isDeleted: false,
    betType: 1,
    totalPages: 1,
  });

  const [trigger, { data, isLoading, isError }] = useUnsettledBetsMutation();

  useEffect(() => {
    trigger(bets);
  }, [bets.betType, bets.isDeleted, bets.noOfRecords]);

  const matchedHandler = (name, el) => {
    setBets((prev) => {
      return {
        ...prev,
        betType: el,
      };
    });
  };

  const handleChange = (e) => {
    setBets((prev) => {
      return {
        ...prev,
        betType: e.target.value,
      };
    });
  };
  const rowsHandler = (e) => {
    setBets((prev) => {
      return {
        ...prev,
        noOfRecords: +e.target.value,
      };
    });
  };

  const searchHandler = () => {
    trigger(bets);
  };

  return (
    <>
      {/* <BasicTabs /> */}

      <div className="bets_cont">
        <div
          className="combo"
          style={{ width: "calc(100% - 20px)", paddingInline: "10px" }}
        >
          <div className="left">
            {/* <p>Unsettled Bets</p> */}

            <div className="matched matched2">
              <RadioStyled>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={bets?.betType}
                  name="radio-buttons-group"
                  onChange={matchedHandler}
                  // defaultChecked="Matched"
                  //   value="Matched"
                >
                  <FormControlLabel value={1} control={<Radio />} label="All" />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="Back"
                  />
                  <FormControlLabel value={3} control={<Radio />} label="Lay" />
                </RadioGroup>
              </RadioStyled>
            </div>
          </div>
          <div className="right right2">
            Total Bets:
            <span
              style={{ color: data?.data?.totalBets >= 0 ? "green" : "red" }}
            >
              {data?.data?.totalBets}
            </span>
            Total Amount:
            <span
              style={{ color: data?.data?.totalStake >= 0 ? "green" : "red" }}
            >
              {data?.data?.totalStake}
            </span>
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
        <div
          className="records_class"
          style={{ width: "calc(100% - 20px)", paddingInline: "10px" }}
        >
          <NoOfRecords handlerselectchange={rowsHandler} />
        </div>

        {isLoading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader />
          </div>
        ) : (
          <div className="mybets_table">
            <TableContainer component={Paper} sx={{ borderRadius: "0px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Event</TableCell>
                    <TableCell>Nation</TableCell>
                    <TableCell>User Rate</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Place Date</TableCell>
                    <TableCell>Detail</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="bet_table-body">
                  {data?.data?.dataList.map((row) => (
                    <TableRow key={row.id}>
                      {/* <TableCell>{row.id}</TableCell> */}
                      <TableCell>{row.eventName}</TableCell>
                      <TableCell>{row.nation}</TableCell>
                      <TableCell>{row.rate}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>{row.time}</TableCell>

                      {/* <TableCell>{row.nation}</TableCell> */}

                      <TableCell>
                        {/* {" "} */}
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
              {!data?.data?.dataList?.length && (
                <p className="pnl-no-data">No Data To Display</p>
              )}
            </TableContainer>
          </div>
        )}
      </div>
      <Pagination setPaginationData={setBets} paginationData={bets} />
    </>
  );
};

export default BetsCasino;
