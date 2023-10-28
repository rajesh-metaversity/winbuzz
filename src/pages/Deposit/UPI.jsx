import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import './styles.scss'

const UPI = ({selectedImage}) => {
  return (
    <div className="deposit_table">
    <TableContainer sx={{ borderRadius: 0 }}>
        <Table aria-label="customized table">
            <TableHead sx={{ borderRadius: 0 }}>
                <TableRow
                    sx={{
                        '& .MuiTableCell-root': {
                            padding: '8px'
                        }
                    }}>
                    <TableCell align="left">Mode</TableCell>
                    <TableCell align="left">Display Name&nbsp;</TableCell>
                    <TableCell align="left">UPI Details&nbsp;</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className='table_body'>


                    <TableRow>
                          <TableCell component="th" scope="row">
                              {selectedImage?.depositType}

                        </TableCell>
                          <TableCell align="left">{selectedImage?.accountHolderName }</TableCell>
                          <TableCell align="left" >
                              {selectedImage?.accountNumber}

                        </TableCell>
                       
                      
                    </TableRow>


        </TableBody>
        </Table>
    </TableContainer>
</div>
  )
}

export default UPI