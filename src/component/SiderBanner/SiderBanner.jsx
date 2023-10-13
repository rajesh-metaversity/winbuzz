import './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../assets/banner-2.jpg';
import Slider from 'react-slick';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

var settings = {
	dots: false,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	speed: 500,
	cssEase: 'linear',
	arrows: false,
	pauseOnHover: true,
	vertical: true,
	verticalSwiping: true
};

const SiderBanner = () => {
    const location = useLocation
    console.log("loaction,", location)
    const arr = [1, 2, 3, 4, 5, 6];

	const imageArray = Array.from({ length: 10 });
	return (
		<>
			<div className="side_banner_cont">
				<div className="play_games">Play Games</div>
				<Slider {...settings}>
					{arr.map((sliderdata, index) => (
						<div key={index}>
							<Grid container>
								<Grid
									item
									// xs={12}
									sx={{
										backgroundColor: '#fff',
										borderRadius: '0.375rem',
										overflowX: 'hidden',
										maxHeight: 'auto',
										cursor: 'pointer'
									}}>
									<img src={banner1} alt="" width="100%" height="160px" style={{ objectFit: '' }} />
								</Grid>
							</Grid>
						</div>
					))}
				</Slider>
			</div>

			<div className="side_banner-sub_cont">
				<div className="play_games">Play Games</div>
				<div className="bottom_images">
					{imageArray?.map((_, index) => (
						<span key={index} className="image_cont">
							<img src={banner1} alt="" className="image" />
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
