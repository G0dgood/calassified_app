import React from 'react'
import Image from 'next/image';
import experience from '../public/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import Flashseller from './Flashseller';
import ExperienceCountdownTimer from './ExperienceCountdownTimer';

interface FlashSalesProps {
	data: any;
}

const BestSellingProducts: React.FC<FlashSalesProps> = ({ data }) => {

	const targetDate = '2024-12-31T23:59:59';

	return (
		<div className='flashSales_conatainer' data-aos="fade-left">
			<div className='danger-color'>
				<div className='flashSales_tag_color'></div>
				<h3>This Month</h3>
			</div>
			<div >
				<div className='count_down_container_main'>
					<div className='count_down_container_main_flex'>
						<h1>Best Selling Products</h1>
					</div>
					<div className='Arrow_container_icon'>
						<button className='load_more_btn'>
							View All
						</button>
					</div>
				</div>
			</div>
			<Flashseller data={data} />

			<div className='categories_container'>
				<div className='categories_container_one'>
					<p className='p_top'>Categories</p>
					<div className='p_top_h1_container'>
						<h1>Enhance Your </h1>
						<h1>Music Experience</h1>
					</div>
					<ExperienceCountdownTimer targetDate={targetDate} />
					<div>
						<button className='load_more_btn_green'>
							Buy Now!
						</button>
					</div>
				</div>
				<div className='categories_container_two'>
					<Image src={experience} alt={`Experience`} />
				</div>
			</div>
		</div>
	)
}

export default BestSellingProducts
