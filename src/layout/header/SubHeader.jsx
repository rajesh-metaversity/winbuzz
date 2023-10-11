import './SubHeader.scss'

const SubHeader = () => {
    const listArray = ["Cricket", "Football", "Tennis", "Horse Racing", "GreyHound Racing", "Kabaddi", "Politics", "Casino", "Sports Book",  "Int Casino", "Binary" ]
  return (
      <div className="sub_header_cont">
          <ul className='sub_header_ul'>
              {listArray.map(items => {
                  return (
                      <><li>{items }</li></>
                  )
              })}
          </ul>
         
    </div>
  )
}

export default SubHeader