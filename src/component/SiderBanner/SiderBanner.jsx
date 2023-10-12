import './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../assets/banner-2.jpg';
import Slider from 'react-slick';
import { Grid } from '@mui/material';

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
	const arr = [1, 2, 3, 4,5,6];
	return (
		<div>
			<Slider {...settings}>
				{arr.map((sliderdata, index) => (
					<div key={index}>
						<Grid container>
							<Grid
								item
								// xs={12}
								sx={{
									padding: '0.25rem',
									backgroundColor: '#fff',
									borderRadius: '0.375rem',
									overflowX: 'hidden',
									border: '1px solid #dee2e6',
									maxHeight: 'auto',
									cursor: 'pointer'
								}}>
								<img src={banner1} alt="" width="100%" height="200px" style={{ objectFit: 'cover' }} />
							</Grid>
						</Grid>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SiderBanner;
