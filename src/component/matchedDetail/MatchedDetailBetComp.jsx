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
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Suspend from "../suspend/suspend";
import { MobileBetPlaceModal } from "../betPlaceModule/BetPlaceModule";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBetSlipData } from "../../App/LoginSlice";
import moment from "moment";
const MatchedDetailBetComp = ({
  data,
  ip,
  setMinMax,
  prevOdds,
  minMax,
  showId,
  PnlOdds,
  favData,
  handleFavDel,
  handleFavSec,
}) => {
  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  const pTime = moment(curr).format("YYYY-MM-DD HH:mm:ss.SSS");
  const [slectionIds, setSlectionIds] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  const handleBackBet = (
    marketName,
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
        isFancy: isFancy,
        isBack: isBack,
        odds: odds,
        name: matchName,
        marketName: marketName,
        selectionId: sid,
        priceValue: priceValue,
        placeTime: pTime,
        marketId: marketId,
        matchId: id,
        matchName: fullmatchName,
      })
    );
  };
  return (
    <>
      {data?.Odds?.map((item, index) => {
        const createMarketID = favData?.find(
          (pnl) => pnl?.marketId === item?.marketId
        )?.marketId;
        return (
          <MainDiv key={index}>
            <GridContainer container>
              <Grid item xs={7} md={4}>
                <PolygonStrip>
                  {/* {
                    createMarketID
                    ?<StarBorderIcon onClick={()=>handleFavSec(item?.marketId)} fontSize="medium" sx={{ color: "#fff" }} />
                    :<StarBorderIcon onClick={()=>handleFavSec(item?.marketId)} fontSize="medium" sx={{ color: "red" }} />
                  } */}

                  {createMarketID ? (
                    <StarIcon
                      onClick={() => handleFavDel(item?.marketId)}
                      fontSize="medium"
                      sx={{ color: "#ffcf03" }}
                    />
                  ) : (
                    <StarBorderIcon
                      onClick={() => handleFavSec(item?.marketId)}
                      fontSize="medium"
                      sx={{ color: "#fff" }}
                    />
                  )}

                  <P props={"matchodds"}>{item?.Name}</P>
                </PolygonStrip>
              </Grid>
              <Grid item md={2} xs={5}>
                <P props={"minmax"}>
                  MIN: {item?.minBet} MAX: {item?.maxBet}
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
              {item?.runners?.map((dataRunn, id) => {
                const prevOddRunners = prevOdds?.Odds[index]?.runners[id];
                return (
                  <Grid
                    key={id}
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
                    }}
                  >
                    <Grid item md={5} xs={5.5}>
                      <P props={"left"}>{dataRunn?.name}</P>
                      {PnlOdds?.map((item, id) => {
                        if (item?.marketId?.includes("BM")) return <></>;
                        const oddsPnl = {
                          [item?.selection1]: item?.pnl1,
                          [item?.selection2]: item?.pnl2,
                          [item?.selection3]: item?.pnl3,
                        };
                        return (
                          <div className="sub_title" key={id}>
                            <span
                              className={
                                oddsPnl[dataRunn.selectionId] < 0
                                  ? "text_danger"
                                  : "text_success"
                              }
                            >
                              {oddsPnl[dataRunn.selectionId] || "0.0"}
                            </span>
                          </div>
                        );
                      })}
                    </Grid>
                    <Grid item md={6} xs={5.5} sx={{ padding: "0px 4px" }}>
                      <Grid container>
                        {dataRunn === 1 ? (
                          <Suspend />
                        ) : (
                          <>
                            <Grid item xs={6}>
                              <Grid
                                className="odds-up-color "
                                container
                                gap={{ md: "1%", xs: "2%" }}
                                sx={{
                                  justifyContent: "center",
                                  cursor: "pointer",
                                }}
                              >
                                {dataRunn?.ex?.availableToBack
                                  ?.map((res, id) => {
                                    const preElmBack =
                                      prevOddRunners?.ex?.availableToBack[id]
                                        .price;
                                    const bg =
                                      (dataRunn?.ex?.availableToBack[id].price >
                                      preElmBack
                                        ? "odds-up-color "
                                        : "") + "back";
                                    return (
                                      <BackGrid
                                        onClick={() =>
                                          handleBackBet(
                                            item?.Name,
                                            item?.marketId,
                                            dataRunn?.name,
                                            dataRunn?.selectionId,
                                            res?.price,
                                            res?.size,
                                            true,
                                            false,
                                            item?.matchName,
                                            item?.minBet,
                                            item?.maxBet
                                          )
                                        }
                                        key={id + "back"}
                                        className={`${bg} ${
                                          id == 1 || id == 2 ? "backgrid_" : ""
                                        }`}
                                        item
                                        md={3.9}
                                        xs={12}
                                      >
                                        <BetTypoPara>
                                          {res?.price ? res?.price : 0}
                                        </BetTypoPara>
                                        <BetTypoSpan>
                                          {res?.size ? res?.size : 0}
                                        </BetTypoSpan>
                                      </BackGrid>
                                    );
                                  })
                                  .reverse()}
                              </Grid>
                            </Grid>

                            <Grid item xs={6}>
                              <Grid
                                container
                                gap={{ md: "1%", xs: "2%" }}
                                sx={{
                                  justifyContent: "center",
                                  cursor: "pointer",
                                }}
                              >
                                {dataRunn?.ex?.availableToLay?.map(
                                  (res, id) => {
                                    const preElmLay =
                                      prevOddRunners?.ex?.availableToLay[id]
                                        .price;
                                    const bg =
                                      (dataRunn?.ex?.availableToLay[id].price <
                                      preElmLay
                                        ? "odds-down-color "
                                        : "") + "lay";
                                    return (
                                      <LayGrid
                                        onClick={() =>
                                          handleBackBet(
                                            item?.Name,
                                            item?.marketId,
                                            dataRunn?.name,
                                            dataRunn?.selectionId,
                                            res?.price,
                                            res?.size,
                                            false,
                                            false,
                                            item?.matchName,
                                            item?.minBet,
                                            item?.maxBet
                                          )
                                        }
                                        className={`${bg} ${
                                          id == 1 || id == 2 ? "backgrid_" : ""
                                        }`}
                                        key={id + "lay"}
                                        item
                                        md={3.9}
                                        xs={12}
                                      >
                                        <BetTypoPara>{res?.price}</BetTypoPara>
                                        <BetTypoSpan>{res?.size}</BetTypoSpan>
                                      </LayGrid>
                                    );
                                  }
                                )}
                              </Grid>
                            </Grid>
                          </>
                        )}
                      </Grid>
                    </Grid>
                    {dataRunn?.selectionId === slectionIds && showId === 1 && (
                      <MobileBetPlaceModal minMax={minMax} />
                    )}
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
