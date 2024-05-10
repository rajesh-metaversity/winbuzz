import styled from '@mui/material/styles/styled'
import { polygonVal, skewVal } from '../matchedDetail/MatchedStyled'
import { Box, Grid, Tab, Typography } from '@mui/material'

export const GridContainer = styled(Grid)(({ props, xxx }) => ({
    backgroundColor: props === 'fancy' ? '#f1f1f1' : '#ffffff',
    borderBottom: props !== 'fancy' ? '1px solid rgb(128 128 128 / 14%)' : 0,
    boxShadow: props !== 'fancy' ? 'rgb(0 0 0 / 5%) -2px 3px 6px, rgb(0 0 0 / 12%) 1px 1px 3px' : 'none',
    borderRadius: props !== 'fancy' ? '0px 0px 5px 5px' : 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: props === 'fancy' ? '0px 0px' : 0,
    margin: xxx === 'lol' ? '0px 0px 0px 0px' : '10px auto'
}))

export const PolygonStrip = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        '&::after': {
            content: '""',
            display: 'none'
        }
    },
    width: '100%',
    background: "linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)",
    clipPath: polygonVal,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    minWidth: '200px',
    [theme.breakpoints.up("md")]: {

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
    }

}))

export const P = styled(Typography)(({ props }) => ({
    textTransform: props === 'fancyodds' ? 'capitalize' : 'uppercase',
    color: props === 'back' ? '#0375cc' : props === 'lay' ? '#e03c3c' : props === 'matchodds' ? '#fff' : '',
    fontSize: props === 'minmax' ? '10px' : '12px',
    fontWeight: 600,
    textTransform: props === 'minmax' ? 'uppercase' : 'capitalize',
    letterSpacing: 0.5,
    margin: props === 'fancyodds' ? 'auto 0 auto 2px' : 0,
    textAlign: props === 'left' ? 'left' : 'center',
    padding: props === 'fancyodds' ? '6px 2px 6px 1px' : props === 'left' ? '0px 0px 0px 8.35938px' : 0,
}))

export const CustomTab = styled(Tab)({
    padding: '2px', minHeight: '29px', fontSize: '12px', borderRadius: '5px',
    background: ' linear-gradient(94deg, #b6842d, #ebda8d 55%, #b7862f)',
    minWidth: '45px',
    color: '#000000 !important'

})