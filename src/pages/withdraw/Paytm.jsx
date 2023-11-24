import {
  FormControl,
  Grid,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Formik } from "formik";

import { useEffect, useState } from "react";
const Paytm = ({
  paytmDetails,
  setWithdrawDetails,
  withdrawDetail,
  valueChangeHandler,
  checkError,
}) => {
  const tableheading = ["Account number", "account Holder name", "action"];
  const [radioValue, setRadioSelectValue] = useState("a");

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.common.white}`,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: "0 10px",
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

  const handleRadioChange = (event, index) => {
    setRadioSelectValue(event.target.value);
    const { id } = index;
    const { accountNumber } = index;
    const { accountHolderName } = index;
    const { accountType } = index;

    setWithdrawDetails((prev) => {
      return {
        ...prev,
        accountNumber: accountNumber,
        accountHolderName: accountHolderName,
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
				amount: '',
				ifsc: '',
				accountNumber: '',
				withdrawType: '',
				withdrawMode: ''
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
            <Typography component="p">Mobile No</Typography>
            <OutlinedInput
              onChange={(e) =>
                valueChangeHandler("accountNumber", e.target.value)
              }
              size="small"
              type="number"
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
            <Typography component="p">Name</Typography>
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
            {paytmDetails?.map((row, index) => (
              <StyledTableRow key={row?.accountNumber + index}>
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
                    name="paytmRadio"
                    value={row.id}
                    checked={radioValue === row.id}
                    onChange={(event) => handleRadioChange(event, row)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Paytm;
