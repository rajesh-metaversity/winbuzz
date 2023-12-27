///styles
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { useBannerListDataMutation } from "../../Services/BannerList/BannerList";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
import { Grid } from "@mui/material";

const TopBanner = () => {
  const isBreakPoint = useMediaQuery("(max-width: 780px)");
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: isBreakPoint ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };
  const [trigger, { data }] = useBannerListDataMutation();
  useEffect(() => {
    trigger({
      type: 1,
    });
  }, []);
  return (
    // <div className="img_cont">
    <>
      <Slider {...settings} className="img_cont">
        {data?.data?.map((sliderdata, index) => (
          <div key={index + sliderdata?.path}>
            <Grid container>
              <Grid
                item
                xs={12}
                sx={{
                  padding: isBreakPoint ? 0 : "0.25rem",
                  backgroundColor: "#fff",
                  borderRadius: isBreakPoint ? 0 : "0.375rem",
                  overflowX: "hidden",
                  border: isBreakPoint ? "none" : "1px solid #dee2e6",
                  maxHeight: isBreakPoint ? "200px" : "68px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={sliderdata?.path}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>
      {/* <div className="mobile-top-banner-img">
				{data?.data?.map((sliderdata, index) => (
					<div
						className="img-div"
						key={index + sliderdata?.name}
						style={{
							backgroundImage: `url('${sliderdata?.path}')`,
						}}
					/>
				))}
			</div> */}
    </>
    // </div>
  );
};

export default TopBanner;
