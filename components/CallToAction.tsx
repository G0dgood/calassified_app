import React from 'react'
import Image from 'next/image'
import spoonshow from '../public/spoonshow.svg'
import spoonshow2 from '../public/buttom_image.svg'
import facebook from '../public/ant-design_facebook-filled.svg'
import ig from '../public/ant-design_instagram-outlined.svg'
import x from '../public/ant-design_twitter-outlined.svg'



const CallToAction = () => {
	return (
		<section className='furniture_section_six'>
			<div className='furniture_section_six_container'>
				<Image src={spoonshow} alt="spoonshow" className='six_container_image' />
				<Image src={spoonshow2} alt="spoonshow" className='six_container_image2' />
				<div className='six_container_image_text_container'>
					<div className='six_container_image_text'>
						<h6 className='six_container_image_text_h6'>Designing Better Experience</h6>
						<h2 className='six_container_image_text_h2'>
							Problems trying to resolve
							the conflict between
						</h2>
						<p className='six_container_image_text_p'>
							Problems trying to resolve the conflict between the two major realms of Classical physics:
						</p>
						<h3 className='six_container_image_text_h3'>
							$16.48
						</h3>
						<h3 className='six_container_image_text_h31'>
							$16.48
						</h3>
						<p className='six_container_image_text_p1'>
							Problems trying to resolve the conflict between the two major realms of Classical physics:
						</p>
						<button className='six_container_image_text_btn'>
							ADD YOUR CALL TO ACTION
						</button>
					</div>
				</div>
			</div>
			<div className='furniture_section_six_container_sub_main'>
				<div className='furniture_section_six_container_sub'>
					<h3>Bandage</h3>
					<div>
						<div className='header_top_container_sup_two'>
							<Image src={facebook} alt="facebook" className='icon_footer ' />
							<Image src={ig} alt="ig" className='icon_footer' />
							<Image src={x} alt="x" className='icon_footer' />
						</div>
					</div>
				</div>
			</div>


		</section>
	)
}

export default CallToAction