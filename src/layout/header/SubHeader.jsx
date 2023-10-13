import { Link } from 'react-router-dom'
import './SubHeader.scss'
import { casino } from '../../routes/PagesUrl'

const SubHeader = () => {
    const listArray = [
        {
            name: "Cricket",
            url: ""
        },
        {
            name: "Football",
            url: ""
        },
        {
            name: "Tennis",
            url: ""
        }
        ,
        {
            name: "Horse Racing",
            url: ""
        },
        {
            name: "GreyHound Racing",
            url: ""
        },
        {
            name: "Kabaddi",
            url: ""
        },
        {
            name: "Politics",
            url: ""
        },
        {
            name: "Casino",
            url: ""
        },
      
        {
            name: "Sports Book",
            url: ""
        },
        {
            name: "Int Casino",
            url: casino
        },
        {
            name: "Binary",
            url: ""
        },
        
    ]
      
    return (
        <div className="sub_header_cont">
            <ul className='sub_header_ul'>
                {listArray.map(items => {
                    return (
                        <>
                        <li>

                            <Link to={items.url}>{items.name}</Link>
                        </li>
                        </>
                    )
                })}
            </ul>

        </div>
    )
}

export default SubHeader