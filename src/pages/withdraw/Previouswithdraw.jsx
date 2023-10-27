import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

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




const Previouswithdraw = () => {
    const ActionButton = () => {
        return (
            <button className='action'>
                cancel
            </button>
        )
    }
    const Status = () => {
        return (
            <div className='status statuspending'>
                pending
            </div>
        )
    }
    const tableheading =
        [
            'Account Number',
            'Account Name',
            'Amount',
            'Bank Name/ Address',
            'IFSC Code',
            'Account Type / Currency',
            'Date',
            'Remark',
            'Status',
            'Action'
        ];
    const tabledata =
        [
            'Account Number',
            'Account Name',
            'Amount',
            'Bank Name/ Address',
            'IFSC Code',
            'Account Type / Currency',
            'Date',
            'Self Rejected',
            < Status />,
            <ActionButton />
        ];



    return (
        <Box className='tableparent_'>
            <Typography className='tabletopheading'>
                Previous Withdraw
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow >
                            {tableheading?.map((heading, index) => (
                                <StyledTableCell key={index + heading} sx={{ whiteSpace: 'nowrap', textTransform: 'capitalize' }}>
                                    {heading}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                {tabledata?.map((rowdata, index) => (
                                    <StyledTableCell key={index} StyledTableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
                                        {rowdata}
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Box>
    );
}

export default Previouswithdraw;