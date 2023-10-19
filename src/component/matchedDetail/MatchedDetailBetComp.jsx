import { Box, Grid, } from "@mui/material";
import { BackGrid, BetTypoPara, BetTypoSpan, GridContainer, LayGrid, MainDiv, P, PolygonStrip } from "./MatchedStyled";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Suspend from "../suspend/suspend";
const MatchedDetailBetComp = () => {

    const arr = [1, 2]

    return (

        <MainDiv>
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

            <GridContainer container props={'betgrid'} gap={0} >
                {arr?.map((data) => (
                    <Grid key={data} container sx={{
                        borderRadius: 0, alignItems: 'center', justifyContent: 'space-between', padding: '4px 0px',
                        borderBottom: '1px solid #ccc',
                        ':last-child': {
                            borderBottom: '0px ',
                        }
                    }}>
                        <Grid item md={5} >
                            <P props={'left'}>
                                South Africa
                            </P>
                        </Grid>
                        <Grid item md={6} sx={{ padding: '0px 4px' }}>
                            <Grid container >
                                {data === 1 ? <Suspend /> :
                                    <>
                                        <Grid item xs={6}>
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
                                    </>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </GridContainer>
        </MainDiv>

    )
}

export default MatchedDetailBetComp;