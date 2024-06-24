import React from 'react';
import Image from 'next/image';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const ProductComponent = ({ data }: any) => {




	return (
		<div className='product_cover_container_sub1'>
			<div className='product_cover_container_sub1_big_container'>
				<div className='product_cover_container_sub1_big_container_icon'>
					<ArrowBackIosNewRoundedIcon style={{ height: "45px", width: "40px" }} />
					<ArrowForwardIosRoundedIcon style={{ height: "45px", width: "40px" }} />
				</div>
				<Image src={data?.thumbnail} alt={`brand`} width={100} height={100} className='product_cover_width' />
			</div>

			<div className='product_cover_container_sub1_mini_container'>
				{data?.images?.map((item: any, i: any) => (
					<Image src={item} alt={`brand`} key={i} width={100} height={75} />
				))}
			</div>
		</div>
	);
};

export default ProductComponent;

