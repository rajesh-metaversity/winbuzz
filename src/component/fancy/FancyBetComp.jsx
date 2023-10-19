import { Box, Grid, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { GridContainer, P, PolygonStrip, CustomTab } from './fancyBetStyled';
import { BackGrid, BetTypoPara, BetTypoSpan, LayGrid, MainDiv } from '../matchedDetail/MatchedStyled';

const FancyBetComp = () => {

    const [value, setValue] = useState(0)


    const handleChange = (e) => {
        setValue(e.target.value)
    }

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

            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
                    display: 'flex', alignItems: 'center',
                    '& .MuiTabs-indicator': {
                        display: 'none'
                    }
                }}>
                    <CustomTab label="all" />
                </Tabs>
            </Box>

            <GridContainer container props={'fancy'} xxx={'lol'} >
                <Grid item xs={4}>
                    <PolygonStrip>
                        {/* <StarBorderIcon fontSize="medium" sx={{ color: '#fff' }} /> */}
                        <P props={'fancyodds'}>
                            session
                        </P>
                    </PolygonStrip>
                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={1}>
                    <P props={'back'}>
                        no
                    </P>
                </Grid>
                <Grid item xs={1}>
                    <P props={'lay'}>
                        yes
                    </P>
                </Grid>

                <Grid item xs={2}>

                </Grid>

            </GridContainer>

            <GridContainer container props={'betgrid'} xxx={'lol'} gap={0} >

                <Grid container sx={{
                    borderRadius: 0, alignItems: 'center', justifyContent: 'space-between', padding: '4px 0px',
                    borderBottom: '1px solid #ccc',
                    ':last-child': {
                        borderBottom: '0px ',
                    }
                }}>
                    <Grid item md={5} >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <StarBorderIcon fontSize="medium" sx={{ color: '#ccc' }} />
                            <P props={'fancyodds'}>
                                Total Match 1st Over Dotball In CWC
                            </P>
                        </Box>
                    </Grid>
                    <Grid item md={6} sx={{ padding: '0px 4px' }}>
                        <Grid container >

                            <>
                                <Grid item xs={5.9}>
                                    <Grid container gap={{ md: '1%', xs: '2%' }} sx={{ justifyContent: 'flex-end' }}>

                                        <BackGrid item md={3.9} xs={3.2}>
                                            <BetTypoPara>
                                                8.5
                                            </BetTypoPara>
                                            <BetTypoSpan>
                                                500k
                                            </BetTypoSpan>
                                        </BackGrid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={5.9}>
                                    <Grid container gap={{ md: '1%', xs: '2%' }} sx={{ justifyContent: 'space-evenly' }}>
                                        <LayGrid item md={3.9} xs={3.2} sx={{ mx: 0.5 }}>
                                            <BetTypoPara>
                                                8.5
                                            </BetTypoPara>
                                            <BetTypoSpan>
                                                500k
                                            </BetTypoSpan>
                                        </LayGrid>
                                        <Grid item md={7} xs={8.5} sx={{ alignItems: 'center', flexDirection: 'column' }}>
                                            <BetTypoPara props={'fancyp'}>
                                                Min Bet: 100
                                            </BetTypoPara>
                                            <BetTypoSpan>
                                                Max Market: 25k
                                            </BetTypoSpan>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </>

                        </Grid>
                    </Grid>
                </Grid>

            </GridContainer>

        </MainDiv>
    )
}

export default FancyBetComp