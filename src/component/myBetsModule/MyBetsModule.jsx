import { Grid, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "./styles.scss";
import { useBetListByMatchQuery } from "../../Services/BettingProfitLoss/BettingProfitLoss";
import { useParams } from "react-router-dom";
const MyBetsModule = () => {
  const { id } = useParams()

  const { data: betlistbymatch } = useBetListByMatchQuery({ matchId: id })
  console.log(betlistbymatch, 'laksjdfh')

  return (
    <>
      <div className="my_bets-cont betslip">

        <div className="heading">
          <span className="my_bets">My bets</span>
        </div>
        <div className="my-bets-module-container">
          <Grid container className="gridcontainer">
            <Grid item xs={8}>
              <Typography component='p' className="text">
                matched bet
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component='p' className="text">
                odds
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography component='p' className="text">
                stake
              </Typography>
            </Grid>
          </Grid>

          {betlistbymatch?.data && Object.keys(betlistbymatch?.data)?.map((matchdatakeys) => (
            betlistbymatch?.data[matchdatakeys]?.map((betlistdata, id) => (
              <Grid container key={id} sx={{
                backgroundColor: betlistdata?.back ?
                  '#A5D9FE' :
                  '#F8D0CE',
                mb: 1, py: 0.5, px: 0.8
              }}>
                <Grid item xs={8}>
                  <Typography component='p'>
                    {betlistdata.nation}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography component='p'>
                    {betlistdata.rate}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography component='p'>
                    {betlistdata.amount}
                  </Typography>
                </Grid>
              </Grid>
            ))
          ))}
        </div>
      </div >

    </>

  )

};

export default MyBetsModule;
