import { Box, Grid } from "@mui/material";
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
const MatchedDetailBetComp = ({ data }) => {
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
                    <Grid item md={5}>
                      <P props={"left"}>{data?.name}</P>
                    </Grid>
                    <Grid item md={6} sx={{ padding: "0px 4px" }}>
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
                                      key={id + "back"}
                                      item
                                      md={3.9}
                                      xs={3.2}>
                                      <BetTypoPara>{res?.price}</BetTypoPara>
                                      <BetTypoSpan>{res?.size}</BetTypoSpan>
                                    </BackGrid>
                                  );
                                })}
                              </Grid>
                            </Grid>

                            <Grid item xs={6}>
                              <Grid
                                container
                                gap={{ md: "1%", xs: "2%" }}
                                sx={{ justifyContent: "center" }}>
                                {data?.ex?.availableToLay?.map((res, id) => {
                                  return (
                                    <LayGrid
                                      key={id + "lay"}
                                      item
                                      md={3.9}
                                      xs={3.2}>
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
            </GridContainer>
          </MainDiv>
        );
      })}
    </>
  );
};

export default MatchedDetailBetComp;
