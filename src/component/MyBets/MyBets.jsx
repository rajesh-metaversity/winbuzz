// import { Table } from '@mui/material/Table'
import './MyBets.scss'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const MyBets = () => {
    const rows = [
        { id: 1, name: 'John Doe', age: 30, address: '123 Main St' },
        // Add more data as needed
      ];
   
  return (
      <div className='bets_cont'>
          <div className='combo'>
              <div className='left'> 
                  <p>My Bets</p>
                  
                  <div className='matched'>
                      <span>
                          
                      <label>Matched</label>
                          <input type='radio' />
                      </span>
                      
                      <span>
               
                      <label>UnMatched</label>
                          <input type='radio' />
                          </span>
                      </div>


                  
              </div>
              <div className='right'>
                  <span><label>Types</label><select><option>All Sports</option><option>2</option></select></span>
                  <span><label>From</label><input type='date'/></span>
                  <span><label>To</label><input type='date' /></span>
                  <button>Search</button>
              </div>
          </div>

         <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event Name</TableCell>
            <TableCell>Nation</TableCell>
            <TableCell>Bet Type</TableCell>
            <TableCell>User Rate</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Profit/Loss</TableCell>
            <TableCell>Place Date</TableCell>
            <TableCell>Match Date</TableCell>
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

export default MyBets