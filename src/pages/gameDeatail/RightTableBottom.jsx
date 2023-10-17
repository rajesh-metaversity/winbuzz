import { useState } from 'react'
import './RightTableBottom.scss'

const RightTableBottom = () => {
    const [isActive, setIsActive] = useState("Unmatched")
    
  return (
      <div className="bottom_cont">
          <div className='my_bets'>My Bets</div>
          <div className='matched_unmatched-bets'>
              <span onClick={() => setIsActive("Unmatched")} className={isActive === 'Unmatched' ? 'active-class' : ''}>Unmatched Bets</span>
              <span onClick={() => setIsActive("matched")} className={isActive === 'matched' ? 'active-class' : ''}>Matched Bets</span>
          </div>
          <div className='table_data'>
              You have no data
          </div>
    </div>
  )
}

export default RightTableBottom