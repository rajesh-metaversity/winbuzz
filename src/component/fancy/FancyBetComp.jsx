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

const FancyBetComp = ({ fancyItem, fancyData }) => {
	return (
		<MainDiv>
			{/* <FancyTabs handleChange={handleChange} value={value}/> */}

			<GridContainer container props={'fancy'} xxx={'lol'}>
				<Grid item xs={4}>
					<PolygonStrip>
						<P props={'fancyodds'}>{fancyData}</P>
					</PolygonStrip>
				</Grid>
				<Grid item xs={4}></Grid>
				<Grid item xs={1}>
					<P props={'back'}>no</P>
				</Grid>
				<Grid item xs={1}>
					<P props={'lay'}>yes</P>
				</Grid>

				<Grid item xs={2}></Grid>
			</GridContainer>

			<GridContainer container props={'betgrid'} xxx={'lol'} gap={0}>
				{fancyItem?.length > 0 &&
					fancyItem?.map((item, id) => {
						return (
							<Grid
								key={id + item.nation + item?.maxBet}
								container
								sx={{
									borderRadius: 0,
									alignItems: 'center',
									justifyContent: 'space-between',
									padding: '4px 0px',
									borderBottom: '1px solid #ccc',
									':last-child': {
										borderBottom: '0px '
									}
								}}>
								<Grid item md={5}>
									<Box sx={{ display: 'flex', alignItems: 'center' }}>
										<StarBorderIcon fontSize="medium" sx={{ color: '#ccc' }} />
										<P props={'fancyodds'}>{item?.nation}</P>
									</Box>
								</Grid>
								<Grid item md={6} sx={{ padding: '0px 4px' }}>
									<Grid container>
										<>
											<Grid item xs={5.9}>
												<Grid container gap={{ md: '1%', xs: '2%' }} sx={{ justifyContent: 'flex-end' }}>
													<BackGrid item md={3.9} xs={3.2}>
														<BetTypoPara>{item?.b1}</BetTypoPara>
														<BetTypoSpan>{item?.bs1}</BetTypoSpan>
													</BackGrid>
												</Grid>
											</Grid>
											<Grid item xs={5.9}>
												<Grid container gap={{ md: '1%', xs: '2%' }} sx={{ justifyContent: 'space-evenly' }}>
													<LayGrid item md={3.9} xs={3.2} sx={{ mx: 0.5 }}>
														<BetTypoPara>{item?.l1}</BetTypoPara>
														<BetTypoSpan>{item?.ls1}</BetTypoSpan>
													</LayGrid>
													<Grid item md={7} xs={8.5} sx={{ alignItems: 'center', flexDirection: 'column' }}>
														<BetTypoPara props={'fancyp'}>Min Bet: {item?.minBet}</BetTypoPara>
														<BetTypoSpan>Max Market: {item?.maxBet}</BetTypoSpan>
													</Grid>
												</Grid>
											</Grid>
										</>
									</Grid>
								</Grid>
							</Grid>
						);
					})}
			</GridContainer>
		</MainDiv>
	);
};

export default FancyBetComp;
