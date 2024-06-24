import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link'
import Image from 'next/image'
import img from '../public/iphone.svg'
import jbl from '../public/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import icon from '../public/Apple_gray_logo.svg'
import game from '../public/GP11_PRD3 1.png'

const Carousels = () => {

	const categories = [
		'Woman’s Fashion',
		'Men’s Fashion',
		'Electronics',
		'Home & Lifestyle',
		'Medicine',
		'Sports & Outdoor',
		'Baby’s & Toys',
		'Groceries & Pets',
		'Health & Beauty',
	];
	return (
		<div>
			<section className='furniture_section'>
				<nav className='funiture_section_card_one'>
					<ul className='funiture_section_list'>
						{categories.map((category, index) => (
							<li key={index} className='furniture_section_list_text'>
								<Link href='#'>{category}</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className='funiture_section_card_two mt-5' data-aos="fade-up">
					<Carousel>
						<Carousel.Item>
							<div className='funiture_section_card_two_sub1'>
								<div className='funiture_section_card_text_sup'>
									<div className='carousels_icon_container'>
										<Image src={icon} alt="icon" />
										<h6 className='funiture_section_card_text_sup_h6'>
											iPhone 14 Series
										</h6>
									</div>
									<div>
										<h2 className='funiture_section_card_text_sup_h2_2'>
											Up to 10%
										</h2>
										<h2 className='funiture_section_card_text_sup_h2_2'>
											off Voucher
										</h2>
									</div>

									<div className='carousels_shopnow'>
										<h6 className='funiture_section_card_text_sup_h62'>
											Shop Now
										</h6>
										<ArrowForwardOutlinedIcon className='shop_white' />
									</div>
								</div>
								<div className='funiture_section_card_text_sup_img'>
									<Image src={img} alt="furniture2" className='furniture_img' />
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className='funiture_section_card_two_sub1'>
								<div className='funiture_section_card_text_sup'>
									<div className='carousels_icon_container'>
										{/* <Image src={jbl} alt="icon" /> */}
										<h6 className='funiture_section_card_text_sup_h6'>
											JBL
										</h6>
									</div>
									<div>
										<h2 className='funiture_section_card_text_sup_h2_2'>
											Enhance Your
										</h2>
										<h2 className='funiture_section_card_text_sup_h2_2'>
											Music Experience
										</h2>
									</div>

									<div className='carousels_shopnow'>
										<h6 className='funiture_section_card_text_sup_h62'>
											Shop Now
										</h6>
										<ArrowForwardOutlinedIcon className='shop_white' />
									</div>
								</div>
								<div className='funiture_section_card_text_sup_img'>
									<Image src={jbl} alt="furniture2" className='furniture_img' />
								</div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className='funiture_section_card_two_sub1'>
								<div className='funiture_section_card_text_sup'>
									<div className='carousels_icon_container'>
										{/* <Image src={icon} alt="icon" /> */}
										<h6 className='funiture_section_card_text_sup_h6'>
											Controller
										</h6>
									</div>
									<div>
										<h2 className='funiture_section_card_text_sup_h2_2'>
											Up to 10%
										</h2>
										<h2 className='funiture_section_card_text_sup_h2_2'>
											New Arrival
										</h2>
									</div>

									<div className='carousels_shopnow'>
										<h6 className='funiture_section_card_text_sup_h62'>
											Shop Now
										</h6>
										<ArrowForwardOutlinedIcon className='shop_white' />
									</div>
								</div>
								<div className='funiture_section_card_text_sup_img'>
									<Image src={game} alt="furniture2" className='furniture_img' />
								</div>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>
			</section>
		</div>
	)
}

export default Carousels