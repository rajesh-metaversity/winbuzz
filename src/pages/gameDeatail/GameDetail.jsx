
import LeftTable from './LeftTable'
import RightTable from './RightTable'
import RightTableBottom from './RightTableBottom'
import './style.scss'

const GameDetail = () => {
  return (
      <div className='game_detail-cont'>
          <div className="game-detail-left-col">
              <LeftTable />
          </div>
          <div className="game-detail-right-col">
              <RightTable />
              <RightTableBottom />

            </div>
    </div>
  )
}
export default GameDetail