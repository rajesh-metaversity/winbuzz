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
import StarIcon from "@mui/icons-material/Star";
import { setBetSlipData } from "../../App/LoginSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { MobileBetPlaceModal } from "../betPlaceModule/BetPlaceModule";
import { useState } from "react";

const BookMaker = ({
  data,
  ip,
  setMinMax,
  prevOdds,
  minMax,
  PnlOdds,
  favData,
  handleFavDel,
  handleFavSec,
  setmatchId
}) => {
  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  const pTime = moment(curr).format("YYYY-MM-DD HH:mm:ss.SSS");
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectionids, setSlectionIds] = useState();

  const handleBackBet = (
    marketId,
    matchName,
    sid,
    odds,
    priceValue,
    isBack,
    isFancy,
    fullmatchName,
    min,
    max
  ) => {
    setMinMax({
      minBet: min,
      maxBet: max,
    });
    setSlectionIds(sid);
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
  const createMarketID =
    data && favData?.find((pnl) => pnl?.marketId === data[0]?.mid);
  return (
    <>
      <MainDiv>
        <GridContainer container>
          <Grid item xs={7} md={4}>
            <PolygonStrip>
              {createMarketID ? (
                <StarIcon
                  onClick={() => handleFavDel(data && data[0]?.mid)}
                  fontSize="medium"
                  sx={{ color: "#ffcf03" }}
                />
              ) : (
                <StarBorderIcon
                  onClick={() => handleFavSec(data && data[0]?.mid)}
                  fontSize="medium"
                  sx={{ color: "#fff" }}
                />
              )}

              <P props={"matchodds"}>Bookmaker</P>
            </PolygonStrip>
          </Grid>
          <Grid item md={2} xs={5}>
            <P props={"minmax"}>
              MIN: {data && data[0]?.minBet} MAX: {data && data[0]?.maxBet}
            </P>
          </Grid>
          <Grid item display={{ xs: "none", md: "block" }} xs={3}>
            <P props={"back"}>back</P>
          </Grid>
          <Grid item display={{ xs: "none", md: "block" }} xs={3}>
            <P props={"lay"}>lay</P>
          </Grid>
        </GridContainer>
        <Grid container>
          <Grid item xs={7}></Grid>
          <Grid item display={{ xs: "block", md: "none" }} xs={2}>
            <P props={"back"}>back</P>
          </Grid>
          <Grid item display={{ xs: "block", md: "none" }} xs={3}>
            <P props={"lay"}>lay</P>
          </Grid>
        </Grid>

        <GridContainer container props={"betgrid"} gap={0}>
          {data?.map((dataBook, id) => {
            if (dataBook?.t === "TOSS") return <></>;
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
                }}
              >
                <Grid item md={5} xs={5.5}>
                  <P props={"left"}>{dataBook?.nation}</P>
                  {PnlOdds?.map((item, id) => {
                    if (!item?.marketId?.includes("BM")) return <></>;
                    const oddsPnl = {
                      [item?.selection1]: item?.pnl1,
                      [item?.selection2]: item?.pnl2,
                      [item?.selection3]: item?.pnl3,
                    };
                    return (
                      <div className="sub_title" key={id}>
                        <span
                          className={
                            oddsPnl[dataBook.sid] < 0
                              ? "text_danger"
                              : "text_success"
                          }
                        >
                          {oddsPnl[dataBook.sid] || "0.0"}
                        </span>
                      </div>
                    );
                  })}
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
                            sx={{ justifyContent: "center" }}
                          >
                            <BackGrid
                              className="back"
                              display={{ xs: "none", md: "block" }}
                              item
                              md={3.9}
                              xs={0}
                            >
                              <BetTypoPara></BetTypoPara>
                              <BetTypoSpan></BetTypoSpan>
                            </BackGrid>
                            <BackGrid
                              className="back"
                              display={{ xs: "none", md: "block" }}
                              item
                              md={3.9}
                              xs={0}
                            >
                              <BetTypoPara></BetTypoPara>
                              <BetTypoSpan></BetTypoSpan>
                            </BackGrid>
                            <BackGrid
                              item
                              md={3.9}
                              xs={12}
                              // className={
                              //   (dataBook && dataBook?.b1 > prevOdds[id]?.b1
                              //     ? "odds-up-color "
                              //     : "") + "back"
                              // }
                              onClick={() =>{
                                setmatchId(dataBook.matchId)
                                handleBackBet(
                                  dataBook?.mid,
                                  dataBook?.nation,
                                  dataBook?.sid,
                                  dataBook?.b1,
                                  dataBook?.bs1,
                                  true,
                                  false,
                                  dataBook?.matchName,
                                  data[0]?.minBet,
                                  data[0]?.maxBet
                                )
                              }
                              }
                            >
                              <BetTypoPara>{dataBook?.b1}</BetTypoPara>
                              <BetTypoSpan>{dataBook?.bs1}</BetTypoSpan>
                            </BackGrid>
                          </Grid>
                        </Grid>
                        <Grid item xs={6}>
                          <Grid
                            container
                            gap={{ md: "1%", xs: "2%" }}
                            sx={{ justifyContent: "center" }}
                          >
                            <LayGrid
                              // className={
                              //   (dataBook?.l1 > prevOdds[id]?.l1
                              //     ? "odds-down-color"
                              //     : "") + "lay"
                              // }
                              item
                              md={3.9}
                              xs={12}
                              onClick={() =>
                                {
                                  setmatchId(dataBook.matchId)
                                  handleBackBet(
                                    dataBook?.mid,
                                    dataBook?.nation,
                                    dataBook?.sid,
                                    dataBook?.l1,
                                    dataBook?.ls1,
                                    false,
                                    false,
                                    dataBook?.matchName,
                                    data[0]?.minBet,
                                    data[0]?.maxBet
                                  )
                                }
                              }
                            >
                              <BetTypoPara>{dataBook?.l1}</BetTypoPara>
                              <BetTypoSpan>{dataBook?.ls1}</BetTypoSpan>
                            </LayGrid>
                            <LayGrid
                              className="lay"
                              display={{ xs: "none", md: "block" }}
                              item
                              md={3.9}
                              xs={0}
                            >
                              <BetTypoPara></BetTypoPara>
                              <BetTypoSpan></BetTypoSpan>
                            </LayGrid>
                            <LayGrid
                              className="lay"
                              display={{ xs: "none", md: "block" }}
                              item
                              md={3.9}
                              xs={0}
                            >
                              <BetTypoPara></BetTypoPara>
                              <BetTypoSpan></BetTypoSpan>
                            </LayGrid>
                          </Grid>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Grid>
                {dataBook?.sid == selectionids && (
                  <MobileBetPlaceModal minMax={minMax} />
                )}
              </Grid>
            );
          })}
        </GridContainer>
      </MainDiv>
    </>
  );
};

export default BookMaker;
