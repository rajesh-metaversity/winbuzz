import styled from '@mui/material/styles/styled'
import { polygonVal, skewVal } from '../matchedDetail/MatchedStyled'
import { Box, Grid } from '@mui/material'

export const GridContainer = styled(Grid)(({ props }) => ({
    backgroundColor: props === 'fancy' ? '#f1f1f1' : '#ffffff',
    borderBottom: props !== 'fancy' ? '1px solid rgb(128 128 128 / 14%)' : 0,
    boxShadow: props !== 'fancy' ? 'rgb(0 0 0 / 5%) -2px 3px 6px, rgb(0 0 0 / 12%) 1px 1px 3px' : 'none',
    borderRadius: props !== 'fancy' ? '0px 0px 5px 5px' : 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: props === 'fancy' ? '0px 0px' : 0
}))

export const PolygonStrip = styled(Box)(() => ({
    width: '100%',
    background: "linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)",
    clipPath: polygonVal,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    minWidth: '300px',
    '&::after': {
        content: '""',
        width: '32px',
        height: '32px',
        background: 'linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)',
        position: 'absolute',
        right: '57px',
        top: '0px',
        transform: skewVal,
    }
}))

export const P = styled('p')(({ props }) => ({
    textTransform: props === 'fancyodds' ? 'capitalize' : 'uppercase',
    color: '#000',
    fontSize: props === 'minmax' ? '10px' : '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    margin: props !== 'fancyodds' ? 'auto 0 auto 30px' : 0,
    textAlign: props === 'left' ? 'left' : 'center',
    padding: props === 'fancyodds' ? '6px 2px 6px 10px' : props === 'left' ? '0px 0px 0px 8.35938px' : 0,
}))