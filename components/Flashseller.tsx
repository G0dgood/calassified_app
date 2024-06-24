
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const Flashseller = ({ data }: any) => {




	const BestsellerComponent = ({ data }: any) => (
		<div className='flash_products_container'>
			{data?.products?.map((item: any, index: any) => (
				<Link key={index} className='bestseller_item' href={`/detailspage/${item?.id}`}>
					<div className='bestseller_products_img'>
						<Image src={item?.thumbnail} alt={`Product ${index + 1}`} width={280} height={238} />
					</div>
					<div className='bestseller_text_container'>
						<h5 className='bestseller_card_title_1'>{item?.brand}</h5>
						<div className='bestseller_card_title_3'>
							<span className='bestseller_card_title_2_sub1'>${item?.price}</span>
							<span className='bestseller_card_title_2_sub2'>${item?.discountPercentage}</span>
						</div>
						<span className='bestseller_card_title_2'>{item?.category}</span>
					</div>
				</Link>
			))
			}
		</div >
	);

	return (
		<section >
			<BestsellerComponent data={data} />
		</section>
	)
}

export default Flashseller
