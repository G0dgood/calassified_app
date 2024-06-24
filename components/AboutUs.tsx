import React from 'react'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import user1 from '../public/user1.svg';
import { aboutdata } from '@/data/data';

const AboutUs = () => {
	return (
		<section className='furniture_section_five'>
			<div className='furniture_section_five_container'>
				<div className='furniture_section_five_container_card1'>
					<h3 className='furniture_section_five_title_h3'>What they say about us</h3>
					<div className='furniture_section_five_title_image_container'>
						<Image src={user1} className='furniture_section_five_title_image' alt='user1' />
						<div className='furniture_section_five_title_image_star'>
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarBorderIcon />
						</div>
						<h6 className='furniture_section_five_title_image_h6'>Slate helps you see how many more days you need to work to
							reach your financial goal.</h6>
						<a href='#' className='furniture_section_five_title_image_a'>Regina Miles</a>
						<h6 className='furniture_section_five_title_image_a_h6'>Designer</h6>
					</div>
				</div>
				<div className='furniture_section_five_container_card2'>
					{aboutdata.map(item => (
						<div className='furniture_section_five_small_image' key={item.id}>
							<Image src={item.image} alt="furniture3" id='section_five_container_card2_img' />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AboutUs
