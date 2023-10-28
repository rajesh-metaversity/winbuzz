import { Button } from '@mui/material'

const WithdrawButton = ({withdrawHandler}) => {

    return (
        <div className='withdrawcoinsparent'>
            <Button className='withdrawcoins' onClick={withdrawHandler}>
                withdraw coins
            </Button>
        </div>
    )
}

export default WithdrawButton