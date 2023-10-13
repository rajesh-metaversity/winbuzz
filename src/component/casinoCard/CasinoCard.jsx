import './style.scss'

const CasinoCard = () => {
    return (
        <div className='casino_card_container'>
             {[1,2,3,4,5,6,7,8,9,19,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map((item)=>{
                return<>
                <div className='casino-card-t'>

            <div className='casino_card'>
                
            </div>
                <div className="casion-card-footer">
                    Play Now
                </div>
                </div>
                </>
             })}
        </div>
    )
}

export default CasinoCard
