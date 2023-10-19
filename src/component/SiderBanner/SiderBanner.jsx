import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/banner-2.jpg";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBannerListDataMutation } from "../../Services/BannerList/BannerList";

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

const SiderBanner = () => {
  const [trigger, { data }] = useBannerListDataMutation();
  const [casinoData, setCasinoData] = useState([]);
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

  return (
    <>
      <div className="side_banner_cont">
        <div className="play_games">Play Games</div>
        <Slider className="right_banner" {...settings}>
          {data?.data?.map((sliderdata, index) => (
            <div key={index}>
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
                  }}>
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
            <span key={index} className="image_cont">
              <img src={data?.imageUrl} alt="" className="image" />
              <div className="over-lay">
                <button className="play-button">Play Now</button>
              </div>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default SiderBanner;
