import React from 'react'
import Image from 'next/image';
import ps from '../public/ps.png';
import Speaker from '../public/Speaker.png';
import hat from '../public/hat.png';
import cucci from '../public/cucci.png';
import delivery from '../public/icon-delivery.svg';
import Icon_secure from '../public/Icon-secure.svg';
import Customer from '../public/Icon-Customerservice.svg';

interface FlashSalesProps {
	data: any;
}

const FlashFeatured: React.FC<FlashSalesProps> = () => {


	const services = [
		{
			src: delivery,
			alt: 'cucci',
			title: 'FREE AND FAST DELIVERY',
			description: 'Free delivery for all orders over $140',
		},
		{
			src: Customer,
			alt: 'cucci',
			title: '24/7 CUSTOMER SERVICE',
			description: 'Friendly 24/7 customer support',
		},
		{
			src: Icon_secure,
			alt: 'cucci',
			title: 'MONEY BACK GUARANTEE',
			description: 'We return money within 30 days',
		},
	];
	return (
		<div className='flashSales_conatainer' data-aos="fade-left">
			<div className='danger-color'>
				<div className='flashSales_tag_color'></div>
				<h3>Featured</h3>
			</div>
			<div >
				<div className='count_down_container_main'>
					<div className='count_down_container_main_flex'>
						<h1>New Arrival</h1>
					</div>
					<div className='Arrow_container_icon'>
					</div>
				</div>
			</div>


			<div className='new_arrival'>
				<div className='new_arrival_first'>
					<Image src={ps} alt={`Product`} className='ps_img' width={620} height={580} />
				</div>
				<div className='new_arrival_two'>
					<div className='new_arrival_three'>
						<Image src={hat} alt={`Speaker`} className='ps_img' width={700} height={284} />
					</div>
					<div className='new_arrival_four'>
						<div>
							<Image src={Speaker} alt={`Speaker`} className='ps_img' width={330} height={284} />
						</div>
						<div>
							<Image src={cucci} alt={`cucci`} className='ps_img' width={330} height={284} />
						</div>
					</div>
				</div>
			</div>



			<div className='service_container_text_orders'>
				{services.map((service, index) => (
					<div key={index} className='service_container_text_icon'>
						<div className='service_container'>
							<div className='service_container_sup'>
								<Image src={service.src} alt={service.alt} />
							</div>
						</div>
						<div className='delivery_container'>
							<h3>{service.title}</h3>
							<p>{service.description}</p>
						</div>
					</div>
				))}
			</div>

		</div>
	)
}

export default FlashFeatured
