import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { MainDiv, BackGrid, BetTypoPara, BetTypoSpan, GridContainer, LayGrid, P, PolygonStrip, } from "../matchedDetail/MatchedStyled";
import Suspend from "../suspend/suspend";

const BookMaker = ({ data }) => {


  return (
		<>
			<MainDiv>
				<GridContainer container>
					<Grid item xs={4}>
						<PolygonStrip>
							<StarBorderIcon fontSize="medium" sx={{ color: '#fff' }} />
							<P props={'matchodds'}>Bookmaker</P>
						</PolygonStrip>
					</Grid>
					<Grid item xs={2}>
						<P props={'minmax'}>{/* MIN: {data[0]?.minBet} MAX: {data[0]?.maxBet} */}</P>
					</Grid>
					<Grid item xs={3}>
						<P props={'back'}>back</P>
					</Grid>
					<Grid item xs={3}>
						<P props={'lay'}>lay</P>
					</Grid>
				</GridContainer>

				<GridContainer container props={'betgrid'} gap={0}>
					{data?.map(data => {
						if (data?.t === 'TOSS') return <></>;
						return (
							<Grid
								key={data.nation + data?.bs1}
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
								<Grid item md={5} xs={5.5}>
									<P props={'left'}>{data?.nation}</P>
								</Grid>
								<Grid item md={6} xs={5.5} sx={{ padding: '0px 4px' }}>
									<Grid container>
										{data === 1 ? (
											<Suspend />
										) : (
											<>
												<Grid item xs={6}>
													<Grid container gap={{ md: '1%', xs: '2%' }} sx={{ justifyContent: 'center' }}>
														<BackGrid display={{ xs: 'none', md: 'block' }} item md={3.9} xs={0}>
															<BetTypoPara>0</BetTypoPara>
															<BetTypoSpan>0</BetTypoSpan>
														</BackGrid>
														<BackGrid display={{ xs: 'none', md: 'block' }} item md={3.9} xs={0}>
															<BetTypoPara>0</BetTypoPara>
															<BetTypoSpan>0</BetTypoSpan>
														</BackGrid>
														<BackGrid item md={3.9} xs={12}>
															<BetTypoPara>{data?.b1}</BetTypoPara>
															<BetTypoSpan>{data?.bs1}</BetTypoSpan>
														</BackGrid>
													</Grid>
												</Grid>
												<Grid item xs={6}>
													<Grid container gap={{ md: '1%', xs: '2%' }} sx={{ justifyContent: 'center' }}>
														<LayGrid item md={3.9} xs={12}>
															<BetTypoPara>{data?.l1}</BetTypoPara>
															<BetTypoSpan>{data?.ls1}</BetTypoSpan>
														</LayGrid>
														<LayGrid display={{ xs: 'none', md: 'block' }} item md={3.9} xs={0}>
															<BetTypoPara>0</BetTypoPara>
															<BetTypoSpan>0</BetTypoSpan>
														</LayGrid>
														<LayGrid display={{ xs: 'none', md: 'block' }} item md={3.9} xs={0}>
															<BetTypoPara>0</BetTypoPara>
															<BetTypoSpan>0</BetTypoSpan>
														</LayGrid>
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
		</>
  );
};

export default BookMaker;
