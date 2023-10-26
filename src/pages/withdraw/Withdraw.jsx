import { AppBar, Box, Container, FormControl, Grid, MenuItem, Select, Tab, Tabs, TextField, Typography, useTheme } from "@mui/material";
import './styles.scss';
import { useState } from "react";
import PropTypes from 'prop-types';
import { useWithdrawQuery } from "../../Services/Withdraw/Withdraw";
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const Withdraw = () => {
  const stakeval = ['+100', '+500', '+1k', '+5k', '+10k', '+25px']
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [border, setBorder] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setBorder(newValue)
  };

  const { data: paymentImage } = useWithdrawQuery()
  console.log(paymentImage?.data[0]?.image, 'alskdjfh')
  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };


  return (
    <Container maxWidth="lg" className="container">

      <Box className="withdrawparent">
        <Box className="heading">
          <Typography component='p'>
            Withdraw
          </Typography>
        </Box>
      </Box>

      <Grid container className="inputwithbutton">
        <Grid item xs={12} md={3}>
          <Typography className="wc" component='p'>
            Withdraw Coins
          </Typography>
          <TextField InputProps={{
            disableUnderline: true,
          }} variant="outlined" value={0} size="small" className="withdrawcoins" placeholder="Withdraw Coins" />
        </Grid>
        <Grid item xs={12} md={9} className="rightcol">
          <Typography component='p' className="ft">
            Choose From your favourite transaction
          </Typography>

          <Box className="buttonstakeparent">
            {stakeval?.map((stake, id) => (
              <button key={id + stake} className="stakebutton" size="large">
                {stake}
              </button>
            ))}
          </Box>

        </Grid>

      </Grid>

      <FormControl sx={{ m: 0 }}
        className="select_"
      >
        <Select
          sx={{
            "& .mui-focused & .muioutlinedinput-notchedoutline": {
              border: "1px solid #484850",
              borderradius: "5px 5px 0 0"
            },
          }}
          size="small"
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ bgcolor: 'background.paper' }} className="paymentstabs">

        <Box className="tabsparent">
          <Tabs
            sx={
              {
                justifyContent: 'space-evenly',
                '&. MuiTabs-flexcontainer': {
                  justifyContent: 'space-evenly'
                }
              }
            }
            className="tabs"
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { display: "none" }
            }}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {paymentImage?.data?.map((imgdata, index) => (
              <Tab TouchRippleProps={{}} className="tab" key={imgdata.id} sx={{ border: `${value === index ? '1px solid #b6842d' : 0}` }} label={
                <img src={imgdata.image} className="tabImg" />
              } />
            ))}
          </Tabs>
        </Box>

        {/* <SwipeableViews */}
        {/* axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex} */}
        {/* > */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        {/* </SwipeableViews> */}
      </Box>

    </Container>
  )
}

export default Withdraw