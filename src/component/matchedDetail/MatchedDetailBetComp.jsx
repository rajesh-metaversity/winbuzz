import { Box, Grid, useMediaQuery } from "@mui/material";
import {
  BackGrid,
  BetTypoPara,
  BetTypoSpan,
  GridContainer,
  LayGrid,
  MainDiv,
  P,
  PolygonStrip,
} from "./MatchedStyled";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Suspend from "../suspend/suspend";
import { MobileBetPlaceModal } from "../betPlaceModule/BetPlaceModule";
const MatchedDetailBetComp = ({ data }) => {

  const isBreakPoint = useMediaQuery("(max-width: 780px)");

  return (
    <>
      {data?.Odds?.map((item, id) => {
        console.log(item, "dsfsadfasd");
        return (
          <MainDiv key={id}>
            <GridContainer container>
              <Grid item xs={4}>
                <PolygonStrip>
                  <StarBorderIcon fontSize="medium" sx={{ color: "#fff" }} />
                  <P props={"matchodds"}>{item?.Name}</P>
                </PolygonStrip>
              </Grid>
              <Grid item xs={2}>
                <P props={"minmax"}>
                  MIN: {item?.minBet} MAX: {item?.maxBet}
                </P>
              </Grid>
              <Grid item xs={3}>
                <P props={"back"}>back</P>
              </Grid>
              <Grid item xs={3}>
                <P props={"lay"}>lay</P>
              </Grid>
            </GridContainer>

            <GridContainer container props={"betgrid"} gap={0}>
              {item?.runners?.map((data) => {
                console.log(data, "ASDasdas");
                return (
                  <Grid
                    key={data}
                    container
                    gap={0.4}
                    sx={{
                      borderRadius: 0,
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "4px 0px",
                      borderBottom: "1px solid #ccc",
                      ":last-child": {
                        borderBottom: "0px ",
                      },
                    }}>
                    <Grid item md={5} xs={5.5}>
                      <P props={"left"}>{data?.name}</P>
                    </Grid>
                    <Grid item md={6} xs={5.5} sx={{ padding: "0px 4px" }}>
                      <Grid container>
                        {data === 1 ? (
                          <Suspend />
                        ) : (
                          <>
                            <Grid item xs={6}>
                              <Grid
                                container
                                gap={{ md: "1%", xs: "2%" }}
                                sx={{ justifyContent: "center" }}>
                                {data?.ex?.availableToBack?.map((res, id) => {
                                  return (
                                    <BackGrid
                                      onClick={() => console.log('workingback')}
                                      key={id + "back"}
                                      className={id == 1 || id == 2 ? 'backgrid_' : ''}
                                      item
                                      md={3.9}
                                      xs={12}>
                                      <BetTypoPara>{res?.price ? res?.price : 0}</BetTypoPara>
                                      <BetTypoSpan>{res?.size ? res?.size : 0}</BetTypoSpan>
                                    </BackGrid>
                                  );
                                }).reverse()}
                              </Grid>
                            </Grid>

                            <Grid item xs={6}>
                              <Grid
                                container
                                gap={{ md: "1%", xs: "2%" }}
                                sx={{ justifyContent: "center" }}>
                                {data?.ex?.availableToLay?.map((res, id) => {
                                  console.log(res, id, 'laksdhjf')
                                  return (
                                    <LayGrid
                                      onClick={() => console.log('workinglay')}
                                      className={id == 1 || id == 2 ? 'backgrid_' : ''}
                                      key={id + "lay"}
                                      item
                                      md={3.9}
                                      xs={12}>
                                      <BetTypoPara>{res?.price}</BetTypoPara>
                                      <BetTypoSpan>{res?.size}</BetTypoSpan>
                                    </LayGrid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}

              <MobileBetPlaceModal />
            </GridContainer>

          </MainDiv>
        );
      })}
    </>
  );
};

export default MatchedDetailBetComp;
