import Iframes from '../../component/Iframes/Iframes'
import RightTable from './RightTable'
import './styles.scss'

const GameDetail = () => {
  return (
    <div className='game_detail-cont'>
      <div className="game-detail-left-col">
        <Iframes />
      </div>
      <div className="game-detail-right-col">
        <RightTable />

      </div>
    </div>
  );
};
export default GameDetail;
