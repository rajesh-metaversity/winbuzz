import { Button } from '@mui/material'

const WithdrawButton = ({withdrawHandler, name, disable}) => {

    return (
        <div className='withdrawcoinsparent'>
            <Button className='withdrawcoins' onClick={withdrawHandler} disabled={ disable}>
                {name}
            </Button>
        </div>
    )
}

export default WithdrawButton