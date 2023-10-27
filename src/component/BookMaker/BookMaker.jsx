import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  MainDiv,
  BackGrid,
  BetTypoPara,
  BetTypoSpan,
  GridContainer,
  LayGrid,
  P,
  PolygonStrip,
} from "../matchedDetail/MatchedStyled";
import Suspend from "../suspend/suspend";
import { setBetSlipData } from "../../App/LoginSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { MobileBetPlaceModal } from "../betPlaceModule/BetPlaceModule";

const BookMaker = ({ data, ip }) => {
  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  const pTime = moment(curr).format("YYYY-MM-DD HH:mm:ss.SSS");
  const dispatch = useDispatch();
  const {id} = useParams();

  const handleBackBet = (marketId,matchName,sid, odds, priceValue, isBack, isFancy, fullmatchName ) => {
    dispatch(
      setBetSlipData({
        userIp: ip,
        odds: odds,
        name: matchName,
        marketName: matchName,
        selectionId: sid,
        priceValue: priceValue,
        placeTime: pTime,
        marketId: marketId,
        matchId: id,
        matchName: fullmatchName,
        isFancy: isFancy,
        isBack: isBack,
      })
    );
  };

  return (
    <>
      <MainDiv>
        <GridContainer container>
          <Grid item xs={4}>
            <PolygonStrip>
              <StarBorderIcon fontSize="medium" sx={{ color: "#fff" }} />
              <P props={"matchodds"}>Bookmaker</P>
            </PolygonStrip>
          </Grid>
          <Grid item xs={2}>
            <P props={"minmax"}>
              {/* MIN: {data[0]?.minBet} MAX: {data[0]?.maxBet} */}
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
          {data?.map((dataBook) => {
            if (dataBook?.t === "TOSS") return <></>;
            return (
              <Grid
                key={dataBook}
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
                <Grid item md={5} xs={5.5}>
                  <P props={"left"}>{dataBook?.nation}</P>
                </Grid>
                <Grid item md={6} xs={5.5} sx={{ padding: "0px 4px" }}>
                  <Grid container>
                    {dataBook?.gstatus == "SUSPENDED" ? (
                      <Suspend status={dataBook?.gstatus} />
                    ) : (
                      <>
                        <Grid item xs={6}>
                          <Grid
                            container
                            gap={{ md: "1%", xs: "2%" }}
                            sx={{ justifyContent: "center" }}>
                            <BackGrid
                              display={{ xs: "none", md: "block" }}
                              item
                              md={3.9}
                              xs={0}>
                              <BetTypoPara>0</BetTypoPara>
                              <BetTypoSpan>0</BetTypoSpan>
                            </BackGrid>
                            <BackGrid
                              display={{ xs: "none", md: "block" }}
                              item
                              md={3.9}
                              xs={0}>
                              <BetTypoPara>0</BetTypoPara>
                              <BetTypoSpan>0</BetTypoSpan>
                            </BackGrid>
                            <BackGrid item md={3.9} xs={12} onClick={() =>
                                  handleBackBet(
                                    dataBook?.mid,
                                    dataBook?.nation,
                                    dataBook?.sid,
                                    dataBook?.b1,
                                    dataBook?.bs1,
                                    true,
                                    false,
                                    dataBook?.matchName
                                  )
                                }
                                >
                              <BetTypoPara
                                >
                                {dataBook?.b1}
                              </BetTypoPara>
                              <BetTypoSpan>{dataBook?.bs1}</BetTypoSpan>
                            </BackGrid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid
                            container
                            gap={{ md: "1%", xs: "2%" }}
                            sx={{ justifyContent: "center" }}>
                            <LayGrid item md={3.9} xs={12} 
                            onClick={() =>
                              handleBackBet(
                                dataBook?.mid,
                                dataBook?.nation,
                                dataBook?.sid,
                                dataBook?.l1,
                                dataBook?.ls1,
                                false,
                                false,
                                dataBook?.matchName
                              )
                            }
                            >
                              <BetTypoPara>{dataBook?.l1}</BetTypoPara>
                              <BetTypoSpan>{dataBook?.ls1}</BetTypoSpan>
                            </LayGrid>
                            <LayGrid
                              display={{ xs: "none", md: "block" }}
                              item
                              md={3.9}
                              xs={0}>
                              <BetTypoPara>0</BetTypoPara>
                              <BetTypoSpan>0</BetTypoSpan>
                            </LayGrid>
                            <LayGrid
                              display={{ xs: "none", md: "block" }}
                              item
                              md={3.9}
                              xs={0}>
                              <BetTypoPara>0</BetTypoPara>
                              <BetTypoSpan>0</BetTypoSpan>
                            </LayGrid>
                          </Grid>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Grid>
                <MobileBetPlaceModal />
              </Grid>
            );
          })}
        </GridContainer>
      </MainDiv>
    </>
  );
};

export default BookMaker;
