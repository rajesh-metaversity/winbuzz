import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { GridContainer, P, PolygonStrip } from "./fancyBetStyled";
import {
  BackGrid,
  BetTypoPara,
  BetTypoSpan,
  LayGrid,
  MainDiv,
} from "../matchedDetail/MatchedStyled";
import StarIcon from "@mui/icons-material/Star";
import { setBetSlipData } from "../../App/LoginSlice";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import { MobileBetPlaceModal } from "../betPlaceModule/BetPlaceModule";

const FancyBetComp = ({
  fancyItem,
  fancyData,
  ip,
  prevOdds,
  setMinMax,
  minMax,
  fancyPnl,
  handleFavSec,
  favData,
  handleFavDel,
  matId,
  setmatchId
}) => {
  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  const pTime = moment(curr).format("YYYY-MM-DD HH:mm:ss.SSS");
  const { id } = useParams();
  const [selectionIds, setSelectionIds] = useState();
  const [fancyArray, setFancyArray] = useState();

  const dispatch = useDispatch();

  const handleBackBet = (
    marketId,
    matchName,
    sid,
    odds,
    priceValue,
    isBack,
    isFancy,
    marketName,
    min,
    max
  ) => {
    setMinMax({
      minBet: min,
      maxBet: max,
    });
    setSelectionIds(sid);
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
        matchId: id || matId,
        isFancy: isFancy,
        isBack: isBack,
      })
    );
  };

  useEffect(() => {
    if(fancyItem?.length){
      const arr = [];
      for(const x of fancyItem){
        if(favData?.find((pnl) => pnl?.marketId === x?.sid)){
          arr.unshift(x);
        } else arr.push(x);
      }
      setFancyArray(arr);
    }
  },[fancyItem]);

  return (
    <MainDiv>
      <GridContainer container props={"fancy"} xxx={"lol"}>
        <Grid item xs={6} md={6}>
          <PolygonStrip>
            <P props={"fancyodds"}>{fancyData}</P>
          </PolygonStrip>
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item xs={3} md={1}>
          <P props={"lay"}>no</P>
        </Grid>
        <Grid item xs={3} md={1}>
          <P props={"back"}>yes</P>
        </Grid>

        <Grid item md={2}></Grid>
      </GridContainer>
      <GridContainer container props={"betgrid"} xxx={"lol"} gap={0}>
        {fancyArray?.length > 0 &&
          fancyArray?.map((item, id) => {
            const createMarketID = favData?.find(
              (pnl) => pnl?.marketId === item?.sid
            )?.marketId;
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
                <Grid item md={6} xs={6}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {createMarketID ? (
                      <StarIcon
                        onClick={() => handleFavDel(item?.sid)}
                        fontSize="medium"
                        sx={{ color: "#ffcf03" }}
                      />
                    ) : (
                      <StarBorderIcon
                        onClick={() => handleFavSec(item?.sid)}
                        fontSize="medium"
                        sx={{ color: "#ccc" }}
                      />
                    )}

                    <P props={"fancyodds"}>{item?.nation}</P>
                  </Box>
                  <p
                    style={{
                      margin: "0",
                      padding: "0px 0 0 12px",
                      fontSize: "12px",
                    }}
                  >
                    {fancyPnl?.find((pnl) => pnl?.marketId === item?.sid)
                      ?.pnl || 0}
                  </p>
                </Grid>
                <Grid item md={6} xs={6} sx={{ padding: "0px 4px" }}>
                  <Grid container>
                    <>
                      <Grid item xs={6} md={5.9}>
                        <Grid
                          container
                          gap={{ md: "1%", xs: "2%" }}
                          sx={{ justifyContent: "flex-end" }}
                        >
                          <LayGrid
                            item
                            md={4}
                            xs={12}
                            className={
                              (Number(item?.l1) < Number(prevOdds[id]?.l1)
                                ? "odds-down-color "
                                : " hiuhiuhiu ") + "lay"
                            }
                            onClick={() =>
                              {
                                setmatchId(item.matchId)
                                handleBackBet(
                                  item?.mid,
                                  item?.nation,
                                  item?.sid,
                                  item?.l1,
                                  item?.ls1,
                                  false,
                                  true,
                                  fancyData,
                                  item?.minBet,
                                  item?.maxBet
                                )
                              }
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
                          sx={{
                            justifyContent: "space-evenly",
                            flexWrap: "nowrap",
                          }}
                        >
                          <BackGrid
                            item
                            md={4}
                            xs={12}
                            sx={{ mx: 0.5 }}
                            className={
                              (Number(item?.b1) < Number(prevOdds[id]?.b1)
                                ? "odds-up-color "
                                : " hiuhiuhiu ") + "back"
                            }
                            onClick={() =>{
                              setmatchId(item.matchId)
                              handleBackBet(
                                item?.mid,
                                item?.nation,
                                item?.sid,
                                item?.b1,
                                item?.bs1,
                                true,
                                true,
                                fancyData,
                                item?.minBet,
                                item?.maxBet
                              )
                            }
                            }
                          >
                            <BetTypoPara>{item?.b1}</BetTypoPara>
                            <BetTypoSpan>{item?.bs1}</BetTypoSpan>
                          </BackGrid>
                          <Grid
                            display={{ xs: "none", md: "block" }}
                            item
                            md={8}
                            sx={{
                              alignItems: "center",
                              flexDirection: "column",
                            }}
                          >
                            <BetTypoPara props={"fancyp"}>
                              Min Bet: {item?.minBet}
                            </BetTypoPara>
                            <BetTypoSpan>
                              Max Market: {item?.maxBet}
                            </BetTypoSpan>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  </Grid>
                </Grid>
                {item?.sid == selectionIds && (
                  <MobileBetPlaceModal minMax={minMax} />
                )}
              </Grid>
            );
          })}
      </GridContainer>
    </MainDiv>
  );
};

export default FancyBetComp;
