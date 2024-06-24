import React from 'react'
import Image from 'next/image';
import at from '../public/icon-copyright.svg';

const footer = () => {
	return (
		<footer className='furniture_section_seven'  >
			<div className='furniture_section_seven_link_container_second'>
				<div className='furniture_section_seven_link_container'>
					<h5>Exclusive</h5>
					<a href="#">Subscribe</a>
					<a href="#">Get 10% off your first order</a>
					<input placeholder='Your Email' className='your_email_input' />

				</div>
				<div className='furniture_section_seven_link_container'>
					<h5>Support</h5>
					<a href="#">111 Bijoy sarani, Dhaka,</a>
					<a href="#">DH 1515, Bangladesh.</a>
					<a href="#">exclusive@gmail.com</a>
					<a href="#">+88015-88888-9999</a>
				</div>
				<div className='furniture_section_seven_link_container'>
					<h5>Account</h5>
					<a href="#">My Account</a>
					<a href="#">Login / Register</a>
					<a href="#">Cart</a>
					<a href="#">Wishlist</a>
					<a href="#">Shop</a>
				</div>
				<div className='furniture_section_seven_link_container'>
					<h5>Quick Link</h5>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms Of Use</a>
					<a href="#">FAQ</a>
					<a href="#">Contact</a>
				</div>
				<div className='furniture_section_seven_link_container'>
					<h5>Download App</h5>
					<p className='your_email_btn_p'>Save $3 with App New User Only</p>
					<div id='your_email_container'>

						<div className='your_qrcode_container'>
							<div>dd</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<div className='furniture_section_seven_buttom_text'>

				<Image src={at} alt={`Speaker`} />
				<h6>
					Copyright Rimel 2022. All right reserved
				</h6>
			</div>
		</footer>
	)
}

export default footer