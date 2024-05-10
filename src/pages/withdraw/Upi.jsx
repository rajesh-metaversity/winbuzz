import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
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
const Upi = ({
  withdrawType,
  upiDetails,
  setWithdrawDetails,
  withdrawDetail,
  valueChangeHandler,
  checkError,
}) => {
  const [radioValue, setRadioValue] = useState();

  const tableheading = ["account number", "account name", "action"];

  const tabledata = ["Account Number", "Account Name", "Amount"];

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

  const upiHandler = (e, event) => {
    setRadioValue(e.target.value);
    const { id } = event;
    const { accountNumber } = event;
    const { accountType } = event;
    const { userId } = event;
    const { withdrawType } = event;
    const { accountHolderName } = event;

    setWithdrawDetails((prev) => {
      return {
        ...prev,
        // withdrawType: id,
        accountHolderName: accountHolderName,
        accountNumber: accountNumber,
        accountType: accountType,
      };
    });
  };
  useEffect(() => {
		setWithdrawDetails(prev => {
			return {
				...prev,
				accountHolderName: '',
				bankName: '',
				accountType: '',
				// amount: '',
				ifsc: '',
				accountNumber: '',
				// withdrawType: '',
				// withdrawMode: ''
			};
		});
  }, []);
  return (
    <div>
      <Grid container sx={{ md: { gap: "1rem", xs: 0 } }}>
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <FormControl
            sx={{ maxWidth: { md: "200px", xs: "100%" }, my: 1, width: "100%" }}
            variant="outlined"
          >
            <Typography component="p">UPI ID</Typography>
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
              <span style={{ color: "red" }}>{checkError?.accountNumber}</span>
            )}
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          md={5.5}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <FormControl
            sx={{ my: 1, width: "100%", maxWidth: { md: "200px", xs: "100%" } }}
            variant="outlined"
          >
            <Typography component="p">Account Name</Typography>
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
              {upiDetails?.map((row, ind) => (
                <StyledTableRow key={row?.id}>
                  <StyledTableCell
                    StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                  >
                    {row?.accountNumber}
                  </StyledTableCell>
                  <StyledTableCell
                    StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ whiteSpace: "nowrap", textTransform: "uppercase" }}
                  >
                    {row?.accountHolderName}
                  </StyledTableCell>

                  <StyledTableCell>
                    <input
                      type="radio"
                      name="upiRadio"
                      value={row.id}
                      checked={radioValue === row.id}
                      onChange={(event) => upiHandler(event, row)}
                    />
                    {/* <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Matched" name="radio-buttons-group" onChange={""}>
                                <FormControlLabel value={true } control={<Radio />}  />
							</RadioGroup> */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </div>
  );
};

export default Upi;
