
import LeftTable from './LeftTable'
import RightTable from './RightTable'
import './style.scss'

const GameDetail = () => {
  return (
      <div className='game_detail-cont'>
          <div className="game-detail-left-col">
              <LeftTable />
          </div>
          <div className="game-detail-right-col">
              <RightTable />
            </div>
    </div>
  )
}
export default GameDetail