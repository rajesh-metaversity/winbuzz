import './BettingProfitLoss.scss'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const BettingProfitLoss = () => {
    const rows = [
        { id: 1, name: 'John Doe', age: 30, address: '123 Main St' },
        // Add more data as needed
      ];
  return (
      <div className='betting_profit-loss_cont'>
          <div className='right'>
              <p>betting profit loss</p>
              <div className='right_date'>
                  <span><label>From</label><input type='date'/></span>
                  <span><label>To Date</label><input type='date' /></span>
                  <button>Search</button>
                  </div>
              </div>
          <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Event Type</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Amount</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default BettingProfitLoss