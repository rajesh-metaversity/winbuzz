// import { Table } from '@mui/material/Table'
import { useEffect, useState } from "react";
import { useMyBetsMutation } from "../../Services/MyBets/MyBets";
import "./MyBets.scss";
import { RadioStyled } from "./styled";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tooltip,
  IconButton,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import Loader from "../../component/Loader/Loader";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import NoOfRecords from "../../component/noOfRecords/NoOfRecords";
import Empty from "../../component/empty/Empty";
import Pagination from "../../component/Pagination/Pagination";

const MyBets = () => {
  const [bets, setBets] = useState({
    noOfRecords: 1,
    index: 0,
    sportType: 1,
    isDeleted: false,
    betType: 1,
    totalPages: 1,
    userId: "",
  });

  const [trigger, { data, isLoading, isError }] = useMyBetsMutation();

  useEffect(() => {
    trigger(bets);
  }, [bets.betType, bets.isDeleted, bets.noOfRecords]);

  const matchedHandler = (name, el) => {
    setBets((prev) => {
      return {
        ...prev,
        isDeleted: el,
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

  const nameSearchHandler = (e) => {
    setBets((prev) => {
      return {
        ...prev,
        userId: e.target.value,
      };
    });
  };

  // const loadHandler = () => {
  // 	trigger(bets)
  // }

  return (
    <>
      <div className="bets_cont">
        <div className="combo">
          <div className="left">
            <p>My Bets</p>

            <div className="matched">
              <RadioStyled>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Matched"
                  name="radio-buttons-group"
                  onChange={matchedHandler}
                >
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Matched"
                  />
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="UnMatched"
                  />
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
        <div className="record-search">
          <NoOfRecords handlerselectchange={rowsHandler} />
          <span>
            <input
              placeholder="Search"
              onChange={nameSearchHandler}
              value={bets?.userId}
            />
            {/* <button onClick={() => loadHandler()}>Load</button> */}
          </span>
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
                {data?.data?.dataList?.length ? (
                  <TableBody className="bet_table-body">
                    {data?.data?.dataList.map((row) => (
                      <TableRow key={row.id}>
                        {/* <TableCell>{row.id}</TableCell> */}
                        <TableCell>{row.eventType}</TableCell>
                        <TableCell>{row.eventNamem}</TableCell>
                        <TableCell>{row.username}</TableCell>
                        <TableCell>{row.marketname}</TableCell>
                        <TableCell>{row.nation}</TableCell>
                        <TableCell
                          style={{ color: row.rate >= 0 ? "green" : "red" }}
                        >
                          {row.rate}
                        </TableCell>
                        <TableCell
                          style={{ color: row.amount >= 0 ? "green" : "red" }}
                        >
                          {row.amount}
                        </TableCell>
                        <TableCell>{row.time}</TableCell>
                        <TableCell>
                          {" "}
                          <Tooltip title={row.deviceInfo}>
                            <IconButton>
                              <RemoveRedEyeIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                ) : (
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>

                    {/* <TableCell> */}
                    <Empty />
                    {/* </TableCell> */}
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                )}
              </Table>
            </TableContainer>
          </div>
        )}
      </div>

      <Pagination setPaginationData={setBets} paginationData={bets} />
    </>
  );
};

export default MyBets;
