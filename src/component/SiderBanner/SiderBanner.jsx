import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import leaf from "../../assets/img/leaf.png";
import { useBannerListDataMutation } from "../../Services/BannerList/BannerList";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
import CasinoRule from "../CasinoRules/CasinoRule";

var settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: true,
  vertical: true,
  verticalSwiping: true,
};

export const SiderBanner = ({ setOpen, open }) => {
  const [casinoRuleModal, setCasinoRuleModal] = useState(false);

  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  const [trigger, { data, isLoading, isError }] = useBannerListDataMutation();
  const [casinoData, setCasinoData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [gameId, setGameId] = useState();
  const [gameName, setGameName] = useState()

  useEffect(() => {
    trigger({
      type: 2,
    });
    fetch("https://admin-api-banners-new.s3.ap-south-1.amazonaws.com/wolf.json")
      .then((res) => res.json())
      .then((res) => {
        setCasinoData(res?.data);
      });
  }, []);


  const handelAuraCasino = (gameId, gameName)=>{
    setGameId(gameId);
    setGameName(gameName)
    setOpen(true)
    
  }

  if (!isBreakPoint ) {
    return (
      <>
        <ModalComponent
          Elememt={
            <CasinoRuleModalContent
              gameId={gameId}
              gameName={gameName}
              handleClose={() => setCasinoRuleModal(false)}
            />
          }
          open={casinoRuleModal}
          setOpen={setCasinoRuleModal}
        />
        <div className="side_banner_cont">
          <div className="play_games">Play Games</div>
          <Slider className="right_banner" {...settings}>
            {data?.data?.map((sliderdata, index) => (
              <div key={index + sliderdata?.path}>
                <Grid container>
                  <Grid
                    item
                    // xs={12}
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "0.375rem",
                      overflowX: "hidden",
                      maxHeight: "auto",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    <img
                      src={sliderdata?.path}
                      alt=""
                      width="100%"
                      height="160px"
                      style={{ objectFit: "" }}
                    />
                  </Grid>
                </Grid>
              </div>
            ))}
          </Slider>
        </div>

			<div className="side_banner-sub_cont">
				<div className="play_games">Play Games</div>
				<div className="bottom_images">
					{casinoData?.map((data, index) => (
						<span key={index + data?.imageUrl} className="image_cont">
							<img src={data?.imageUrl} alt="" className="image" />
							<div className="over-lay">
								<button onClick={()=>handelAuraCasino(data?.gameId, data.gameName)} className="play-button">Play Now</button>
							</div>
						</span>
					))}
				</div>
			</div>
      <CasinoRule setOpen={setOpen} gameId={gameId}  gameName={gameName} handleClose={handleClose} open={open}/>
		</>
	);
  } else {
    return (
      <>
        <div className="mobile-casion-banner-heading">
          <img src={leaf} alt="" />
          casino
        </div>
        <div className="mobile-casino-banner-conatainer">
          {data?.data?.map((sliderdata, index) => {
            return (
              <img src={sliderdata.path} alt="" key={index + sliderdata.path} />
            );
          })}
        </div>
      </>
    );
  }
};
