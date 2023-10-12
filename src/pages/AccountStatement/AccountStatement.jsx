import { Table, TableContainer, TableHead, TableRow } from '@mui/material'
import './AccountStatement.scss'
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#333333',
        color: theme.palette.common.white,
        border: `1px solid ${theme.palette.common.white}`,
        fontSize:12,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        border:'1px solid grey',
    
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    // '&:last-child td, &:last-child th': {
    //     border: 0,
    // },
}));

function createData(name, calories, fat, carbs, protein, sname) {
    return { name, calories, fat, carbs, protein, sname };
}

const rows = [

    createData(1, "2023-10-11 23:49", "-", - 100.00, 0.29, "B-Withdraw To Up-Line"),
    createData(2, "2023-10-11 23:49", "-", 2000, 100.29, "B-Withdraw To Up-Line"),
    createData(3, "2023-10-11 23:49", - 2100, "-", 2100.29, "B-Withdraw To Up-Line"),
    createData(4, "2023-10-11 23:49", "-", -1000, - 800.00, "B-Withdraw To Up-Line"),
    createData(5, "2023-10-11 23:49", - 8000,-500, "-", "B-Withdraw To Up-Line"),
    createData(6, "2023-10-11 23:49", "-", -1000, - 100.00, "B-Withdraw To Up-Line"),
];
const AccountStatement = () => {

    return (
        <div className='account_statement_section'>
            <div className='account_st_top'>
                <div className='accnt_text_left'>Account Statement</div>
                <div className='from_date_right'>
                    <form className='from_date'>
                        <div className='input_field'>
                            <label htmlFor="form">Form</label><br />
                            <input type="date" />
                        </div>
                        <div className='input_field'>
                            <label htmlFor="form">Date</label><br />
                            <input type="date" />
                        </div>
                        <div className='input_field'>
                            <label htmlFor="form">All</label><br />
                            <input type="date" />
                        </div>
                    </form>
                    <div className='search'>
                        <button className='search_btn'>Search</button>
                    </div>
                </div>
            </div>

            <TableContainer component={Paper} sx={{ borderRadius: 0, }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead sx={{ borderRadius: 0 }}>
                        <TableRow sx={{
                            '& .MuiTableCell-root': {
                                padding: '8px',
                            },
                        }}>
                            <StyledTableCell>Sr No</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Credit&nbsp;</StyledTableCell>
                            <StyledTableCell align="left">Debit&nbsp;</StyledTableCell>
                            <StyledTableCell align="left">Balance&nbsp;</StyledTableCell>
                            <StyledTableCell align="left">Remark</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row) =>


                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="center">{row.protein}</StyledTableCell>
                                <StyledTableCell align="center">{row.sname}</StyledTableCell>
                            </StyledTableRow>

                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default AccountStatement
