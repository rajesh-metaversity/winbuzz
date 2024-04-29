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
  styled,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
const Bank = ({
  withdrawType,
  bankDetails,
  setWithdrawDetails,
  withdrawDetail,
  bankDetailsLoading,
  valueChangeHandler,
  checkError,
}) => {
  const [radioValue, setRadioValue] = useState();
  const tableheading = [
    "account number",
    "Account Holder Name",
    "Bank Name/Address",
    "IFSC Code",
    "Account Type/ Currency",
    "action",
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.common.white}`,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: "10px 10px",
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const bankHandler = (e, event) => {
    setRadioValue(e.target.value);
    const { id } = event;
    const { accountNumber } = event;
    const { accountType } = event;
    const { accountHolderName } = event;
    const { ifsc } = event;
    const { bankName } = event;

    setWithdrawDetails((prev) => {
      return {
        ...prev,
        accountHolderName: accountHolderName,
        accountNumber: accountNumber,
        accountType: accountType,
        ifsc: ifsc,
        bankName: bankName,
      };
    });
  };
  useEffect(() => {
    setWithdrawDetails((prev) => {
      return {
        ...prev,
        accountHolderName: "",
        bankName: "",
        accountType: "",
        // amount: '',
        ifsc: "",
        accountNumber: "",
        // withdrawType: '',
        // withdrawMode: ''
      };
    });
  }, []);
  return (
    <div>
      {withdrawDetail.withdrawType && (
        <>
          <Grid container sx={{ md: { gap: "1rem", xs: 0 } }}>
            <Grid item xs={0.5}></Grid>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormControl
                sx={{
                  maxWidth: { md: "200px", xs: "100%" },
                  my: 1,
                  width: "100%",
                }}
                variant="outlined"
              >
                <Typography component="p" sx={{ fontSize: "14px" }}>
                  Account Number
                </Typography>
                <OutlinedInput
                  onChange={(e) =>
                    valueChangeHandler("accountNumber", e.target.value)
                  }
                  size="small"
                  sx={{ width: "100%" }}
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  value={withdrawDetail?.accountNumber}
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {checkError?.accountNumber && (
                  <span style={{ color: "red" }}>
                    {checkError?.accountNumber}
                  </span>
                )}
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <FormControl
                sx={{
                  my: 1,
                  width: "100%",
                  maxWidth: { md: "200px", xs: "100%" },
                }}
                variant="outlined"
              >
                <Typography component="p" sx={{ fontSize: "14px" }}>
                  Account Name
                </Typography>
                <OutlinedInput
                  size="small"
                  onChange={(e) =>
                    valueChangeHandler("accountHolderName", e.target.value)
                  }
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  value={withdrawDetail?.accountHolderName}
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {checkError?.accountHolderName && (
                  <span style={{ color: "red" }}>
                    {checkError?.accountHolderName}
                  </span>
                )}
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <FormControl
                sx={{
                  my: 1,
                  width: "100%",
                  maxWidth: { md: "200px", xs: "100%" },
                }}
                variant="outlined"
              >
                <Typography component="p" sx={{ fontSize: "14px" }}>
                  Bank Name
                </Typography>
                <OutlinedInput
                  size="small"
                  onChange={(e) =>
                    valueChangeHandler("bankName", e.target.value)
                  }
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  value={withdrawDetail?.bankName}
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {checkError?.bankName && (
                  <span style={{ color: "red" }}>{checkError?.bankName}</span>
                )}
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <FormControl
                sx={{
                  my: 1,
                  width: "100%",
                  maxWidth: { md: "200px", xs: "100%" },
                }}
                variant="outlined"
              >
                <Typography component="p" sx={{ fontSize: "14px" }}>
                  IFSC
                </Typography>
                <OutlinedInput
                  size="small"
                  onChange={(e) => valueChangeHandler("ifsc", e.target.value)}
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  value={withdrawDetail?.ifsc}
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {checkError?.ifsc && (
                  <span style={{ color: "red" }}>{checkError?.ifsc}</span>
                )}
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
              md={2}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <FormControl
                sx={{
                  my: 1,
                  width: "100%",
                  maxWidth: { md: "200px", xs: "100%" },
                }}
              >
                <Typography component="p" sx={{ fontSize: "14px" }}>
                  Account Type
                </Typography>
                <Select
                  sx={{
                    "& .mui-focused & .muioutlinedinput-notchedoutline": {
                      border: "1px solid #484850",
                      borderradius: "5px 5px 0 0",
                    },
                  }}
                  size="small"
                  onChange={(e) =>
                    valueChangeHandler("accountType", e.target.value)
                  }
                  value={withdrawDetail?.accountType}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Savings"}>Savings</MenuItem>
                  <MenuItem value={"Current"}>Current</MenuItem>
                </Select>
                {checkError?.accountType && (
                  <span style={{ color: "red" }}>
                    {checkError?.accountType}
                  </span>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={0.5}></Grid>
          </Grid>
          {withdrawType &&
            <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    {tableheading?.map((heading, index) => (
                      <StyledTableCell
                        key={index + heading}
                        sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                      >
                        {heading}
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bankDetails?.map((bankData, index) => (
                    <StyledTableRow key={bankData?.accountNumber + index}>
                      <StyledTableCell
                        StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                      >
                        {bankData?.accountNumber}
                      </StyledTableCell>
                      <StyledTableCell
                        StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                      >
                        {bankData?.accountHolderName}
                      </StyledTableCell>
                      <StyledTableCell
                        StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                      >
                        {bankData?.bankName}
                      </StyledTableCell>
                      <StyledTableCell
                        StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                      >
                        {bankData?.ifsc}
                      </StyledTableCell>
                      <StyledTableCell
                        StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                      >
                        {bankData?.accountType}
                      </StyledTableCell>
                      <StyledTableCell>
                        <input
                          type="radio"
                          name="upiRadio"
                          value={bankData.id}
                          checked={radioValue === bankData.id}
                          onChange={(event) => bankHandler(event, bankData)}
                        />

                        {/* <RadioGroup aria-labelledby="demo-radio-buttons-group-label"  name="radio-buttons-group" onChange={bankSelectHandler}>
                           <FormControlLabel value={true } control={<Radio />}  />
         </RadioGroup> */}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          }
        </>
      )}
    </div>
  );
};

export default Bank;
