import { Box, Grid, } from "@mui/material";
import { BackGrid, BetTypoPara, BetTypoSpan, GridContainer, LayGrid, P, PolygonStrip } from "./MatchedStyled";
import StarBorderIcon from '@mui/icons-material/StarBorder';
const MatchedDetailBetComp = () => {

    const arr = [1, 2]

    return (
        <>
            <Box>
                <GridContainer container >
                    <Grid item xs={4}>
                        <PolygonStrip>
                            <StarBorderIcon fontSize="medium" sx={{ color: '#fff' }} />
                            <P props={'matchodds'}>
                                MATCH ODDS
                            </P>
                        </PolygonStrip>
                    </Grid>
                    <Grid item xs={2}>
                        <P props={'minmax'}>
                            MIN:100 MAX:50K
                        </P>
                    </Grid>
                    <Grid item xs={3}>
                        <P props={'back'}>
                            back
                        </P>
                    </Grid>
                    <Grid item xs={3}>
                        <P props={'lay'}>
                            lay
                        </P>
                    </Grid>
                </GridContainer>

                {arr?.map((data) => (
                    <GridContainer container props={'betgrid'} >
                        <Grid key={data} container sx={{ borderRadius: 0, alignItems: 'center', justifyContent: 'space-between' }}>
                            <Grid item xs={4} md={2}>
                                <P props={'left'}>
                                    South Africa
                                </P>
                            </Grid>
                            <Grid item xs={8} md={10}>
                                <Grid container>
                                    <Grid item xs={6} >
                                        <Grid container gap={{ md: '1%', xs: '2%' }} sx={{ justifyContent: 'center' }}>
                                            <BackGrid item md={3.9} xs={3.2}>
                                                <BetTypoPara>
                                                    8.5
                                                </BetTypoPara>
                                                <BetTypoSpan>
                                                    500k
                                                </BetTypoSpan>
                                            </BackGrid>
                                            <BackGrid item md={3.9} xs={3.2}>
                                                <BetTypoPara>
                                                    8.5
                                                </BetTypoPara>
                                                <BetTypoSpan>
                                                    500k
                                                </BetTypoSpan>
                                            </BackGrid>
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
                                    <Grid item xs={6}>
                                        <Grid container gap={{ md: '1%', xs: '2%' }} sx={{ justifyContent: 'center' }}>
                                            <LayGrid item md={3.9} xs={3.2}>
                                                <BetTypoPara>
                                                    8.5
                                                </BetTypoPara>
                                                <BetTypoSpan>
                                                    500k
                                                </BetTypoSpan>
                                            </LayGrid>
                                            <LayGrid item md={3.9} xs={3.2}>
                                                <BetTypoPara>
                                                    8.5
                                                </BetTypoPara>
                                                <BetTypoSpan>
                                                    500k
                                                </BetTypoSpan>
                                            </LayGrid>
                                            <LayGrid item md={3.9} xs={3.2}>
                                                <BetTypoPara>
                                                    8.5
                                                </BetTypoPara>
                                                <BetTypoSpan>
                                                    500k
                                                </BetTypoSpan>
                                            </LayGrid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </GridContainer>
                ))}
            </Box>
        </>
    )
}

export default MatchedDetailBetComp;