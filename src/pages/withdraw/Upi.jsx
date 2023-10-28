import { FormControl, FormControlLabel, Grid, InputLabel, OutlinedInput, Paper, Radio, RadioGroup, Table, TableBody, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
const Upi = ({upiDetails}) => {

    const tableheading = ['account number', 'account name', 'action']

    const tabledata =
        [
            'Account Number',
            'Account Name',
            'Amount',
        ];

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.common.white}`,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            padding: '10px 10px'
        },

    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));



    return (
        <div>
            <Grid container sx={{ md: { gap: '1rem', xs: 0 } }}>

                <Grid item xs={12} md={5.5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <FormControl sx={{ maxWidth: { md: '200px', xs: '100%' }, my: 1, width: '100%', }} variant="outlined">
                        <Typography component='p'>
                            UPI ID
                        </Typography>
                        <OutlinedInput
                            size='small'
                            sx={{ width: '100%' }}
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>


                <Grid item xs={12} md={5.5} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <FormControl sx={{ my: 1, width: '100%', maxWidth: { md: '200px', xs: '100%' }, }} variant="outlined">
                        <Typography component='p'>
                            Account Name
                        </Typography>
                        <OutlinedInput
                            size='small'
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>

            </Grid >

            <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            {tableheading?.map((heading, index) => (
                                <StyledTableCell key={index + heading} sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                    {heading}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {upiDetails?.map((row, ind) => (
                            <StyledTableRow key={row?.accountNumber + ind + row?.id}>

                                    <StyledTableCell key={ind} StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                        {row?.accountNumber}
                                </StyledTableCell>
                                <StyledTableCell key={ind} StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                        {row?.accountHolderName}
                                </StyledTableCell>
                               
                                     <StyledTableCell>
                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Matched" name="radio-buttons-group" onChange={""}>
                                <FormControlLabel value={true } control={<Radio />}  />
							</RadioGroup>
                            </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>

    )
}

export default Upi