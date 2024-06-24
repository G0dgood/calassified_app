import React from 'react'
import ProductComponent from '@/components/ProductComponent';
import Link from 'next/link';
import icon2 from '../public/icn-cart.svg'
import icon3 from '../public/icn-eye.svg'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import Image from 'next/image'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/Cart/cartSlice';
import { toast } from 'react-toastify'
import { addToWishList } from '@/features/WishList/wishSlice';


const ProductCover = ({ data }: any) => {

	const dispatch = useDispatch();
	// Function to add item to cart  
	const handleAddToCart = () => {
		dispatch(addToCart(data));
		toast.success('Item added to cart!');
	};
	// Function to add item to wish list
	const handleAddToWishList = () => {
		dispatch(addToWishList(data));
		toast.success('Added to wish list!');
	};

	return (
		<section className='productpage_one'>
			<div className='productpage_one_nav_container'>
				<Link href="/">	<a >Home</a></Link>
				<KeyboardArrowRightRoundedIcon style={{ color: '#BDBDBD' }} />
				<h6>shop</h6>
			</div>
			<div className='product_cover_container'>
				{/* Product Component */}
				<ProductComponent data={data} />
				<div className='product_cover_container_sub2'>
					<h4 className='product_cover_container_sub2_h41'>Floating Phone</h4>
					<span className='product_staricon_container'>
						<StarIcon style={{ color: '#F3CC03' }} />
						<StarIcon style={{ color: '#F3CC03' }} />
						<StarIcon style={{ color: '#F3CC03' }} />
						<StarIcon style={{ color: '#F3CC03' }} />
						<StarIcon style={{ color: '#F3CC03' }} />
						<StarBorderIcon style={{ color: '#F3CC03' }} />
						<h6 >10 Reviews</h6>
					</span>
					<h3 className='product_staricon_amount'>$1,139.33</h3>
					<div className='product_availability_stock'>
						<h6 className='product_availability_stock_h61'> Availability  :</h6>
						<h6 className='product_availability_stock_h62'>In Stock</h6>
					</div>
					<hr className='product_availability_hr' />
					<div className='product_cover_color_select_container'>
						<span className='product_cover_color_select' style={{ backgroundColor: '#23A6F0' }}></span>
						<span className='product_cover_color_select' style={{ backgroundColor: '#2DC071' }}></span>
						<span className='product_cover_color_select' style={{ backgroundColor: '#E77C40' }}></span>
						<span className='product_cover_color_select' style={{ backgroundColor: '#252B42' }}></span>
					</div>

					<div className='product_cover_select_options'>
						<button className='product_cover_select_options_btn'>Select Options</button>
						<span className='product_cover_select_options_span' onClick={handleAddToWishList}>
							<FavoriteBorderRoundedIcon />
						</span>
						<span className='product_cover_select_options_span' onClick={handleAddToCart}>
							<Image src={icon2} alt="furniture3" className='product_cover_icons' />
						</span>
						<span className='product_cover_select_options_span' >
							<Image src={icon3} alt="furniture3" className='product_cover_icons' />
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductCover