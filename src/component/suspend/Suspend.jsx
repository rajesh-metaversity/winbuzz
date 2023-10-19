import { Box, Typography } from '@mui/material'
import React from 'react'
import { SuspendComp, SuspendTypo } from './suspendStyled'

const Suspend = () => {
    return (
        <SuspendComp>
            <SuspendTypo>
                suspended
            </SuspendTypo>
        </SuspendComp>
    )
}

export default Suspend