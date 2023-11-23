import { FC } from 'react'
import './styles.scss'
// interface NoOfRecordsType {
//     handlerselectchange: (e: any) => void,
    
// }

const NoOfRecords = ({ handlerselectchange }) => {
    const entriesToShow = [25, 50, 100, 150]
    return (
        <div className="entries">
            <p className="total-entries">
                <span>Show</span>
                <span>
                    <select onChange={handlerselectchange} className='noofrecordselect'>
                        {entriesToShow?.map((enteries) => (
                            <option key={enteries}>{enteries}</option>
                        ))}
                    </select>
                </span>
                <span>Entries</span>
            </p>
        </div>
    )
}

export default NoOfRecords