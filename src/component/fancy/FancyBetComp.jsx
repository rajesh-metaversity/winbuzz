import { Box, Grid } from '@mui/material'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { GridContainer, P, PolygonStrip } from './fancyBetStyled';
import { MainDiv } from '../matchedDetail/MatchedStyled';

const FancyBetComp = () => {
    return (
        <MainDiv>
            <GridContainer container props={'fancy'} >
                <Grid item xs={4}>
                    <PolygonStrip>
                        {/* <StarBorderIcon fontSize="medium" sx={{ color: '#fff' }} /> */}
                        <P props={'fancyodds'}>
                            fancy
                        </P>
                    </PolygonStrip>
                </Grid>
                <Grid item xs={8}>

                </Grid>
            </GridContainer>
        </MainDiv>
    )
}

export default FancyBetComp