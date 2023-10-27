import { Box, Grid, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { GridContainer, P, PolygonStrip, CustomTab } from "./fancyBetStyled";
import {
  BackGrid,
  BetTypoPara,
  BetTypoSpan,
  LayGrid,
  MainDiv,
} from "../matchedDetail/MatchedStyled";
import FancyTabs from "./FancyTabs";
import { setBetSlipData } from "../../App/LoginSlice";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import { MobileBetPlaceModal } from "../betPlaceModule/BetPlaceModule";

const FancyBetComp = ({ fancyItem, fancyData, ip }) => {
  console.log(fancyData, "fancyData");
  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  const pTime = moment(curr).format("YYYY-MM-DD HH:mm:ss.SSS");
  const { id } = useParams();

  const dispatch = useDispatch()

  const handleBackBet = (marketId, matchName, sid, odds, priceValue, isBack, isFancy, marketName) => {
    dispatch(
      setBetSlipData({
        userIp: ip,
        odds: odds,
        name: matchName,
        marketName: marketName,
        selectionId: 0,
        priceValue: priceValue,
        placeTime: pTime,
        marketId: sid,
        matchId: id,
        isFancy: isFancy,
        isBack: isBack,
      })
    );
  }

  return (
    <MainDiv>
      <GridContainer container props={"fancy"} xxx={"lol"}>
        <Grid item xs={6} md={4}>
          <PolygonStrip>
            <P props={"fancyodds"}>{fancyData}</P>
          </PolygonStrip>
        </Grid>
        <Grid display={{ xs: 'none', md: 'block' }} item xs={2} md={4}></Grid>
        <Grid item xs={3} md={1}>
          <P props={"back"} sx={{ textAlign: { md: 'center', xs: 'right' } }}>no</P>
        </Grid>
        <Grid item xs={3} md={1}>
          <P props={"lay"}>yes</P>
        </Grid>

        <Grid display={{ xs: 'none', md: 'block' }} item md={2}></Grid>
      </GridContainer>

      <GridContainer container props={"betgrid"} xxx={"lol"} gap={0}>
        {fancyItem?.length > 0 &&
          fancyItem?.map((item, id) => {
            console.log(item, "Sdcscsacsadc")
            return (
              <Grid
                key={id}
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
                <Grid item md={6} xs={7}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <StarBorderIcon fontSize="medium" sx={{ color: "#ccc" }} />
                    <P props={"fancyodds"}>{item?.nation}</P>
                  </Box>
                </Grid>
                <Grid item md={6} xs={5} sx={{ padding: "0px 4px" }}>
                  <Grid container>
                    <>
                      <Grid item xs={6} md={5.9} >
                        <Grid
                          container
                          gap={{ md: "1%" }}
                          sx={{ justifyContent: "flex-end" }}>
                          <LayGrid item md={3.9} xs={12}
                            onClick={() =>
                              handleBackBet(
                                item?.mid,
                                item?.nation,
                                item?.sid,
                                item?.l1,
                                item?.ls1,
                                false,
                                true,
                                fancyData
                              )
                            }
                          >
                            <BetTypoPara>{item?.l1}</BetTypoPara>
                            <BetTypoSpan>{item?.ls1}</BetTypoSpan>
                          </LayGrid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6} md={5.9}>
                        <Grid
                          container
                          gap={{ md: "1%", xs: "2%" }}
                          sx={{ justifyContent: "space-evenly" }}>
                          <BackGrid item md={3.9} xs={12} sx={{ mx: 0.5 }}
                            onClick={() =>
                              handleBackBet(
                                item?.mid,
                                item?.nation,
                                item?.sid,
                                item?.b1,
                                item?.bs1,
                                true,
                                true,
                                fancyData
                              )
                            }>
                            <BetTypoPara>{item?.b1}</BetTypoPara>
                            <BetTypoSpan>{item?.bs1}</BetTypoSpan>
                          </BackGrid>
                          <Grid
                            display={{ xs: 'none', md: 'block' }}
                            item
                            md={7}
                            sx={{ alignItems: "center", flexDirection: "column", }}>
                            <BetTypoPara props={"fancyp"}>Min Bet: {item?.minBet}</BetTypoPara>
                            <BetTypoSpan>Max Market: {item?.maxBet}</BetTypoSpan>
                          </Grid>
                        </Grid>
                      </Grid>

                    </>
                  </Grid>
                </Grid>
                <MobileBetPlaceModal />

              </Grid>
            )
          })
        }

      </GridContainer>
    </MainDiv >
  );
};

export default FancyBetComp;
