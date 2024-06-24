import React from 'react'
import Image from 'next/image';
import { brandData } from '@/data/data';
import facebook from '../public/ant-design_facebook-filled.svg'
import ig from '../public/ant-design_instagram-outlined.svg'
import x from '../public/ant-design_twitter-outlined.svg'

const DetailsBestseller = ({ productdata }: any) => {

	const { products } = productdata


	const BestsellerComponent = ({ data }: any) => (
		<div className='bestseller_products_container2'>
			{data?.map((item: any, index: any) => (
				<div key={index} className='bestseller_item2'   >
					<div className='bestseller_products_img2'>
						<Image src={item?.thumbnail} alt={`Product ${index + 1}`} className='Product_products_img2' width={100} height={100} />
					</div>
					<div className='bestseller_text_container2'>
						<h5 className='bestseller_card_title_1'>{item?.title}</h5>
						<a href="#" className='bestseller_card_title_2'>{item?.category}</a>
						<div className='bestseller_card_title_3'>
							<span className='bestseller_card_title_2_sub1'>${item?.price}</span>
							<span className='bestseller_card_title_2_sub2'>${item?.discountPercentage}</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);

	return (
		<div>
			<section className='productpage_three'>
				<div className='productpage_three_title_container'>
					<h3>BESTSELLER PRODUCTS</h3>
					{/* BestsellerComponent */}
					<BestsellerComponent data={products} />
				</div>

				<div className='productpage_three_brand_container'>
					{brandData.map((item: any, index: any) => (
						<Image src={item.image} alt={`brand  ${index + 1}`} key={index} />
					))}
				</div>

			</section>
			<div className='furniture_section_six_container_sub_main2'>
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
		</div>

	)
}

export default DetailsBestseller