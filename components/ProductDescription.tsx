import React from 'react'
import Image from 'next/image'

const ProductDescription = ({ data }: any) => {
	 

	
	return ( 
		<section className='productpage_two'>
			<div className='description_links_container'>
				<div className='description_links_container_sub'>
					<a className='description_links_container_sub_a' href='#'>Description</a>
					<a className='description_links_container_sub_a' href='#'>Additional Information</a>
					<a className='description_links_container_sub_a' href='#'>Reviews <span className='reviews_nums'>(0)</span></a>
				</div>
			</div>
			<div className='description_container_jump'>
				<div className='description_container_jump_sub1'>
					<h3>{data?.brand} </h3>
					<p>{data?.description}</p>
					<p className='description_container_jump_sub1_border'>{data?.description}</p>
					<p>{data?.description}</p>
				</div>
				<div className='description_container_jump_sub2' >
					<Image src={data?.thumbnail} alt="phone" className='container_jump_img' width={100} height={100} />
				</div>
			</div>
		</section>

	)
}

export default ProductDescription
