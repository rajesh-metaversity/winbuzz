import './styles.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';

const Iframes = () => {
    const [toggle, setToggle] = useState(false);
  return (
    < >
       <div className='scorecard_heading'>
             <p><ArrowBackIcon/><strong>NEWZELEND VS BANGLADESH</strong> 13/10/2023</p>
             <button onClick={()=>setToggle(!toggle)} className='score_btn'><RemoveRedEyeIcon />Score</button>
            </div>
            <div className={toggle?'score_board2':"score_board"}>

            </div>
    </>
  )
}

export default Iframes
