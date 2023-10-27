import { FormControl, Grid, InputLabel, OutlinedInput, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
const Upi = () => {

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


    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

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
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                {tabledata?.map((rowdata, index) => (
                                    <StyledTableCell key={index} StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
                                        {rowdata}
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>

    )
}

export default Upi