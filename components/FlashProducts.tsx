import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Monthseller from './Monthseller';

interface FlashSalesProps {
	data: any;
}

const FlashProducts: React.FC<FlashSalesProps> = ({ data }) => {

	return (
		<div className='flashSales_conatainer' data-aos="fade-left">
			<div className='danger-color'>
				<div className='flashSales_tag_color'></div>
				<h3>Our Products</h3>
			</div>
			<div >
				<div className='count_down_container_main'>
					<div className='count_down_container_main_flex'>
						<h1>Explore Our Products</h1>

					</div>

					<div className='Arrow_container_icon'>
						<div className='Arrow_container_icon_sub'><ArrowBackOutlinedIcon /></div>
						<div className='Arrow_container_icon_sub'><ArrowForwardOutlinedIcon /></div>
					</div>
				</div>
			</div>
			<Monthseller data={data} />
		</div>
	)
}

export default FlashProducts
