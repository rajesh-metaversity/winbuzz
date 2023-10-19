import { Box, Typography } from '@mui/material'
import styled from '@mui/material/styles/styled'

export const SuspendComp = styled(Box)({
    // position: 'absolute',
    height: '100%',
    height: '38px',
    boxShadow: 'inset 0 0 0 1px #ff000057',
    width: '100%', display: 'flex', alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
})

export const SuspendTypo = styled(Typography)({
    fontSize: '12px', color: '#000', textTransform: 'uppercase'
})