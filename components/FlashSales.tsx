'use client'
import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Flashseller from './Flashseller';
import CountdownTimer from './CountdownTimer';

interface FlashSalesProps {
	data: any;
}

const FlashSales: React.FC<FlashSalesProps> = ({ data }) => {
	const targetDate = '2024-12-31T23:59:59';

	return (
		<div className='flashSales_conatainer' data-aos="fade-left">
			<div className='danger-color'>
				<span className='flashSales_tag_color'></span>

				<h3>Today’s</h3>
			</div>
			<div className='count_down_container_main'>
				<CountdownTimer targetDate={targetDate} />
				<div className='Arrow_container_icon'>
					<div className='Arrow_container_icon_sub'><ArrowBackOutlinedIcon /></div>
					<div className='Arrow_container_icon_sub'><ArrowForwardOutlinedIcon /></div>
				</div>
			</div>
			<Flashseller data={data} />
		</div>
	)
}

export default FlashSales
