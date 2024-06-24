import React from 'react'
import Image from 'next/image'
import { bestsellericon } from '@/data/data'


const FeaturedProducts = () => {
	return (
		<section className='furniture_section_three'>
			<div className='furniture_section_container'>
				<h4 className='section_two_title1'>
					Featured Products
				</h4>
				<h3 className='section_two_title2'>
					THE BEST SERVICES
				</h3>
				<p className='section_two_title3'>
					Problems trying to resolve the conflict between
				</p>
			</div>

			<div className='service_icons_container' >
				{bestsellericon?.map((item: any, index: any) => (
					<div className='service_icons_container_card' key={index}>
						<Image src={item.icon} alt="furniture3" className='service_icons' />
						<h3 className='service_icons_text'>
							{item.title}
						</h3>
						<p className='service_icons_text_sub'>
							{item.details}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default FeaturedProducts
